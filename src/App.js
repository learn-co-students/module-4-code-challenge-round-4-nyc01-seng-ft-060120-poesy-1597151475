import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    display: false
  }

  handleFormClick = () => {
    this.setState(previousState => {
      return {
        display: !previousState.display
      }
    })
  }

  newPoemSubmitHandler = (obj) => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: obj.title,
        author: obj.author,
        content: obj.content
      })
    })
    .then(response => response.json())
    .then(poemObj => {
      let newPoemsArray = [...this.state.poems, poemObj]
      this.setState({
        poems: newPoemsArray
      })
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(poemsArray => {
      this.setState({
        poems: poemsArray
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleFormClick}>Show/hide new poem form</button>
          {this.state.display && <NewPoemForm newPoemSubmitHandler={this.newPoemSubmitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
