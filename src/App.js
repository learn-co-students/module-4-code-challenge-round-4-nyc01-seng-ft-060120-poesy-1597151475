import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const URL = 'http://localhost:6001/poems/'

class App extends React.Component {
  state = {
    poems: [],
    showForm: false
  }

  fetchPoems = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({poems: data}))
  }

  postPoem = (poem) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(poem)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({showForm: false})
      this.fetchPoems();
    })
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  componentDidMount(){
    this.fetchPoems();
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm postPoem={this.postPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
