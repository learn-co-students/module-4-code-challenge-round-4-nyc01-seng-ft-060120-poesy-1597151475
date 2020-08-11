import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const POEMS_API = 'http://localhost:6001/poems'

class App extends React.Component {

  state = {
    poems: [],
    clicked: false
  }

  componentDidMount() {
    fetch(POEMS_API)
    .then(resp => resp.json())
    .then(poems => this.setState({poems}))
  }

  toggleFormClicked = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  addNewPoem = (response) => {
    this.setState({poems: [response, ...this.state.poems]})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleFormClicked}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm addNewPoem={this.addNewPoem} toggleFormClicked={this.toggleFormClicked}/>: null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
