import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    formDisplay: false
  }

  showForm = () =>{
    let newBoolean = !this.state.formDisplay
    this.setState({
      formDisplay: newBoolean
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
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>New Poem</button>
          {this.state.formDisplay? <NewPoemForm post={this.postPoem}/>:null}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
