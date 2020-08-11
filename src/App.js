import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


class App extends React.Component {

  state = {

    poemsArray: [],
    display: false // to toggle between hiding and showing form?
  }

  toggleForm = () => {
    let newDisplay = !this.state.display
    this.setState({
      display: newDisplay
    })
  }

  submitHandler = (obj) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify ({
        title: obj.title,
        content: obj.content,
        author: obj.author
      })
    })
    .then(resp => resp.json())
    .then(obj => {
      let newPoems = [...this.state.poemsArray, obj]
      this.setState({
        poemsArray: newPoems
      })
    })
  }





  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poemsArray: poems
      })
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.display ?  <NewPoemForm submitHandler={this.submitHandler}/> : null}
        </div>
        <PoemsContainer poems={this.state.poemsArray} />
      </div>
    );
  }
}

export default App;
