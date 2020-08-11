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

  deletePoem = (e) => {
    let id = e.target.id
    let obj = this.state.poems.find(poem => poem.id == id)
    console.log(obj, id)
    fetch(`http://localhost:6001/poems/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => this.fetchPoems())

  }

  fetchPoems = () => {
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(response => this.setState({poems: response}))
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.toggleHidden.bind(this)}>Show/hide new poem form</button>
          {!this.state.isHidden && <NewPoemForm formSubmitHandler={this.formSubmitHandler}/>}
        </div>
        <PoemsContainer favoritePoem={this.favoritePoem} poems={this.state.poems} deletePoem={this.deletePoem}/>
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
