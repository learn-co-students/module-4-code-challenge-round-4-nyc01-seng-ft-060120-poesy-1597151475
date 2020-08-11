import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = "http://localhost:6001/poems"

class App extends React.Component {
  state = {
    poems: [],
    showForm: false
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(poemsObjects => this.setState({poems: poemsObjects}, () => console.log(this.state.poems)))
  }

  handleClick = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleNewPoem = (newPoem) => {
    this.setState({poems: [...this.state.poems, newPoem]})
  }

  handleDelete = (id) => {
    fetch(`http://localhost:6001/poems/${id}`, { 
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(r => r.json())
    .then(() => {
      let newArr = this.state.poems.filter(poem => poem.id !== id)
      this.setState({poems: newArr})
    })
  }
  

  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.showForm
          ? <NewPoemForm handleNewPoem={this.handleNewPoem} />
          : null 
          }
          {/* {false && <NewPoemForm />} */}
        </div>
        <PoemsContainer poems={this.state.poems} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
