import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    hidden: true
  }

  componentDidMount(){
    fetch(`http://localhost:6001/poems`)
      .then(resp => resp.json())
      .then(data => this.setState({
        poems: data
      }))
  }

  clickHandler = (e) => {
    this.setState({ hidden: !this.state.hidden})
  }

  submitHandler = (name, author, content) => {
    fetch(`http://localhost:6001/poems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: name, content: content, author: author})
    })
    this.componentDidMount()
    // .then(resp => resp.json())
    // .then(data => this.setState({
    //   poems: data
    // }))
  }

  deleteHandler = (id) => {
    fetch(`http://localhost:6001/poems/${id}`, {
      method: 'DELETE'
    })
    let newPoems = this.state.poems.filter(poem => poem.id !==id)
    this.setState({ poems: newPoems })
  }

  


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.hidden ? null : <NewPoemForm submitHandler={this.submitHandler}/>}
          {/* {false && <NewPoemForm />} */}
        </div>
        <PoemsContainer poems={this.state.poems} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;
