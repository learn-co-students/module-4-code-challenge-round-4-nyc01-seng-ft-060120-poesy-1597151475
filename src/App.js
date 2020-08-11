import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = "http://localhost:6001/poems"

class App extends React.Component {
  state = {
    poems: []
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(poemsObjects => this.setState({poems: poemsObjects}, () => console.log(this.state.poems)))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
