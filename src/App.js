import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    stateArray: [],
    poemForm: false
  }
  componentDidMount(){
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({stateArray: poems}))
      // .then(poems => console.log(poems))
  }

  formClickHandler = () => {
    // console.log(event)
    if(this.state.poemForm){
      this.setState({poemForm: false})
    } else {
      this.setState({poemForm: true})
    }
  }
  
  

  render() {
    // console.log(this.state)
    // console.log(this.state.poemForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formClickHandler}>Show/hide new poem form</button>
          {(this.state.poemForm) && <NewPoemForm />}
        </div>
        <PoemsContainer stateArray={this.state.stateArray}/>
      </div>
    );
  }
}

export default App;
