import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state ={
    poems: [],
    display: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then((data)=> this.setState({poems:data}))
  }
  handleClick = (event) =>{
    let change = !this.state.display
    this.setState({
      display: change
    })
    }
    handleCreatePoem = (poem) => {
      const newPoem = {
        ...poem
      }
      fetch('http://localhost:6001/poems', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(newPoem)
      })
      .then(res => res.json())
      .then(poem =>{
        const updatesPoems = [...this.state.poems, poem]
        this.setState({poems:updatesPoems})
      })
    }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          { this.state.display ?
        <NewPoemForm onCreatePoem ={this.handleCreatePoem}/>
        : null
          }
          <button onClick= {this.handleClick}>Show/hide new poem form</button>
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
