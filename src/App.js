import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    formDisplay: false,
    poemObjects: []
  }

  showForm = () =>{
    let newBoolie = !this.state.formDisplay
    this.setState({
      formDisplay: newBoolie
    })
  }

  componentDidMount=()=>{
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(poems =>{
      this.setState({
        poemObjects: poems
      })
    })
  }

  refresh=()=>{
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(poems =>{
      this.setState({
        poemObjects: poems
      })
    })
  }

  postPoem=(poem)=>{
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poem)
    }).then(res => res.json())
    .then(()=>{
      this.setState({
        formDisplay: false
      })
      this.refresh()
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>New Poem</button>
          {this.state.formDisplay? <NewPoemForm post={this.postPoem}/>:null}
        </div>
        <PoemsContainer poems={this.state.poemObjects}/>
      </div>
    );
  }
}

export default App;
