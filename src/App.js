import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'

class App extends React.Component {
  state = {
    showForm: false, 
    poems: [],
    newPoem: {
      title: "",
      content: "",
      author: ""
    },
    showFavorites: false
  }

  componentDidMount() {
    this.getPoems()
  }

  getPoems() {
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(json => this.setState({poems: json}))
  }

  handleForm = () => {
    this.setState(previousState => {
      return {
        showForm: !previousState.showForm
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      newPoem: {
        ...this.state.newPoem,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.postPoem(this.state.newPoem)
    e.target.reset()
  }

  handleRead = (poem) => {
    let poemsList = [...this.state.poems]
    let index = poemsList.indexOf(poem)
    poemsList[index].read = !poemsList[index].read
    this.setState({poems: poemsList})
  }

  postPoem = (poem) => {
    let formData = {
      title: poem.title,
      author: poem.author,
      content: poem.content
    }
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:6001/poems', configObj)
      .then(resp => resp.json())
      .then(json => this.updateState(json))
      .catch(error => console.log(error))
  }

  updateState = (obj) => {
    let newPoems = [...this.state.poems]
    newPoems.push(obj)
    this.setState({
      poems: newPoems
    })
  }

  deletePoem = (obj) => {
    let configObj = {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    fetch('http://localhost:6001/poems/' + obj.id, configObj)
      .then(this.removePoem(obj))
      .catch(error => console.log(error))
  }

  removePoem = (poem) => {
    let poemsList = [...this.state.poems]
    let index = poemsList.indexOf(poem)
    poemsList.splice(index,1)
    this.setState({
      poems: poemsList
    })
  }

  handleDisplay = () => {
    this.setState(previousState => {
      return {
        showFavorites: !previousState.showFavorites
      }
    })
  }

  makeFavorite = (poem) => {
    let poemsList = [...this.state.poems]
    let index = poemsList.indexOf(poem)
    poemsList[index].favorite = !poemsList[index].favorite
    this.setState({poems: poemsList})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleDisplay}>Show {this.state.showFavorites ? "All Poems" : "Favorites"}</button>
          <button onClick={this.handleForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} /> : null }
        </div>
        {this.state.showFavorites ? <FavoritesContainer poems={this.state.poems} readHandler={this.handleRead} handleDelete={this.deletePoem} favoriteHandler={this.makeFavorite} /> : <PoemsContainer poems={this.state.poems} readHandler={this.handleRead} handleDelete={this.deletePoem} favoriteHandler={this.makeFavorite}/>}
      </div>
    );
  }
}

export default App;
