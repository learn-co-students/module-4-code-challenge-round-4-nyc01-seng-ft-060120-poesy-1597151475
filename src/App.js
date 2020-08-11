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

  toggleForm = (event) => {
    this.setState({showForm : !this.state.showForm})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">

          <button onClick = { this.toggleForm }>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm />}

        </div>
        <PoemsContainer poems = { this.state.poems } />
      </div>
    );
  }
}

export default App;
