import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    stateArray: []
  }
  componentDidMount(){
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({stateArray: poems}))
      // .then(poems => console.log(poems))
  }

  formClickHandler = (event) => {
    console.log(event.target)
  }
  
  

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formClickHandler}>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer stateArray={this.state.stateArray}/>
      </div>
    );
  }
}

export default App;
