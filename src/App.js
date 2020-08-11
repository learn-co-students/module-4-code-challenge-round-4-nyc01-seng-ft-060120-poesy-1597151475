import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const baseUrl = "http://localhost:6001/poems"
class App extends React.Component {
  state = {
    poems: [],
    display: false 
  }

  componentDidMount() {
    this.fetchPoems() 
  }

  fetchPoems = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(poem => this.setState({
        poems: poem 
      }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display 
    this.setState({
      display: newBoolean 
    })
  }

  addPoem = (poem) => {
    this.setState({
      poems: [...this.state.poems, poem] 
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm addPoem={this.addPoem}/> : null }
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
