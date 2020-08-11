import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

let poemsUrl = `http://localhost:6001/poems/`;
class App extends React.Component {

  state = {
    poems: [],
    showPoem: false
  }

  addPoem = (poem) => {
    fetch(poemsUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(poem),
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ poems: [...this.state.poems, data] }));
    
  }

  formHandler = (e) => {
    e.preventDefault()
    this.setState({showPoem: !this.state.showPoem})
  }

  componentDidMount() {
    fetch(poemsUrl)
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
