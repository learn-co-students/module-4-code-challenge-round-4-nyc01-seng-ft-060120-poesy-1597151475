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
    }, () => console.log(this.state.display))
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
          {this.state.display && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
