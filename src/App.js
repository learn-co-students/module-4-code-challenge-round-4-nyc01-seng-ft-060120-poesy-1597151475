import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from './Favorites'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isHidden: true,
      poems: [],
      favorites: []
    }
  }

  toggleHidden (e) {
    this.setState({isHidden: !this.state.isHidden})
  }


  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(response => this.setState({poems: response}))
  }

  formSubmitHandler = (obj) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => this.createPoem(response))
  }

  createPoem = (response) => {
    let newArray = [response,...this.state.poems]
    this.setState({poems: newArray})
  }

  favoritePoem = (id) => {
    let poemToFind = this.state.poems.find(poem => poem.id == id)
    let newArray = [poemToFind,...this.state.favorites]
    this.setState({favorites: newArray})

  }




  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.toggleHidden.bind(this)}>Show/hide new poem form</button>
          {!this.state.isHidden && <NewPoemForm formSubmitHandler={this.formSubmitHandler}/>}
        </div>
        <PoemsContainer favoritePoem={this.favoritePoem} poems={this.state.poems}/>
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
