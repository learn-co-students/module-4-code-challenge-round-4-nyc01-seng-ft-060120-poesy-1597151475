import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = "http://localhost:6001/poems"

class App extends React.Component {

  state = {
    poemArray: []
  }

  fetchPoems = () => {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ poemArray:data }))
  }

  componentDidMount(){
    this.fetchPoems()
  }

  submitHandler = (obj) => {
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        application: 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => this.fetchPoems())
  }


  boolHandler = (id, newBool) => {
    fetch(`${API}/${id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        application: 'application/json'
      },
      body: JSON.stringify({read:newBool})
    })
    .then(response => response.json())
    .then(data => this.fetchPoems())
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {true && <NewPoemForm submitHandler={this.submitHandler} />}
        </div>
        <PoemsContainer poemsArray={this.state.poemArray} boolHandler={this.boolHandler} />
      </div>
    );
  }
}

export default App;
