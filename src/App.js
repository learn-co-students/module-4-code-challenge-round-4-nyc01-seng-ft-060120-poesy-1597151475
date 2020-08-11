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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>New Poem</button>
          {this.state.formDisplay? <NewPoemForm />:null}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
