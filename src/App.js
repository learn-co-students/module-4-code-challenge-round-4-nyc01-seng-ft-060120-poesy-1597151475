import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const URL = "http://localhost:6001/poems"

class App extends React.Component { 

  state = {poems:[], showForm: true}


  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({poems:json}) )
  }

  updatePoems = (poem) => {
    const newPoemsAr = [...this.state.poems, poem]
    this.setState({poems: newPoemsAr})
  }

  addPoem = (newPoem) => {
    const configObj = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newPoem)
    }
    fetch(URL, configObj)
    .then(res => res.json())
    .then(json => this.updatePoems(json))
  }

  removePoem = (poem) => {
    const newPoemsAr = this.state.poems.filter( p => p.id !== poem.id )
    this.setState({poems: newPoemsAr})
  }

  deletePoem = (poem) => {
    fetch(URL+'/'+poem.id, {method: "DELETE"})
    .then(this.removePoem(poem))
  }

  toggleForm = (prevState) => {
    return {showForm: !prevState.showForm}
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.setState(this.toggleForm)}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm submitHandler={this.addPoem} />}
        </div>
        <PoemsContainer deleteHandler={this.deletePoem} poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
