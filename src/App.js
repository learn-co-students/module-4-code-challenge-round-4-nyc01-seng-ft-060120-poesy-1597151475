import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }
  
  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(data => this.setState({
      poems: data
    }))
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  addPoem = (poemObj) => {
    console.log(poemObj)
      fetch("http://localhost:6001/poems",{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          'title': poemObj.title,
          'content': poemObj.content,
          'author': poemObj.author
        })
      })
      .then(resp => resp.json())
      .then(data => this.componentDidMount(data))
  }
  
  render() {
    return (
      <div className="app">
        <div className="sidebar">
    <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm addPoem={this.addPoem} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
