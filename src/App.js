import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showPoem: false
  }

  addPoem = (poem) => {
    this.setState({poems: [...this.state.poems, poem]})
  }

  formHandler = (e) => {
    e.preventDefault()
    this.setState({showPoem: !this.state.showPoem})
  }

  componentDidMount() {
    fetch(`http://localhost:6001/poems/`)
      .then((resp) => resp.json())
      .then((data) => this.setState({poems: data}, () => console.log(this.state)))
  }
  
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={(e) => this.formHandler(e)}>Show/hide new poem form</button>
          {this.state.showPoem ? <NewPoemForm addPoem={this.addPoem} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
