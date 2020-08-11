import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
let baseUrl = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    display: true,
    poems: [],
    favorite: []
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(poems => this.setState({poems: poems}))
  }
  showHandler = (e) => {
   let newDisplay = !this.state.display
   this.setState({
     display: newDisplay
   })
  }

  submitHandler = (obj) => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: obj.title,
        content: obj.content,
        author: obj.author
      })
    })
    .then(response => response.json())
    .then(newObj => {
      let newPoems = [...this.state.poems, newObj]
      this.setState({
        poems: newPoems
      })
    })
  }

  deleteHandler = (obj) => {
    fetch(baseUrl + obj.id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(poem => {
      let newPoem = this.state.poems.filter(poem => obj.id !== poem.id)
      this.setState({
        poems: newPoem
      })
    })
  }

  favoriteHandler = (favObj) => {
    
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showHandler}> Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm submitHandler={this.submitHandler}/> : null}
        </div>
        <div>
        </div>
        <PoemsContainer poems={this.state.poems} deleteHandler={this.deleteHandler} favoriteHandler={this.favoriteHandler}/>
      </div>
    );
  }
}

export default App;
