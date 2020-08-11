import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const baseURL = "http://localhost:6001/poems/"

class App extends React.Component {

  state = {poems: [], showForm: true}

  componentDidMount() {
    fetch(baseURL).then((resp) => resp.json())
      .then((poems) => this.setState({ poems: poems }))
  }

  toggleForm = () => {
    this.setState({showForm : !this.state.showForm})
  }

  removePoem = (poem) => {
    const newPoems = this.state.poems.filter((p) => p.id !== poem.id)
    this.setState({ poems: newPoems })

    fetch(baseURL + poem.id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })

  }

  handleSubmit = (poem) => {
    this.setState({ poems: [...this.state.poems, poem] })
    
    fetch(baseURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(poem)
    })
  }

  markRead = (poem) => {
    if ('read' in poem) {
      poem.read = !poem.read;
    } else {
      poem.read = true;
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">

          <button onClick = { this.toggleForm }>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm handleSubmit = { this.handleSubmit } />}

        </div>
        <PoemsContainer poems = { this.state.poems } markRead = { this.markRead } removePoem = { this.removePoem }/>
      </div>
    );
  }
}

export default App;
