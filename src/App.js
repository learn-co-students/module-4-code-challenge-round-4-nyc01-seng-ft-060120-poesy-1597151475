import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from './Favorites'

class App extends React.Component {

  state={
    poems: [],
    display: false,
    favorites: []
  }

  handleFormClick = () => {
    this.setState(previousState => {
      return {
        display: !previousState.display
      }
    })
  }

  newPoemSubmitHandler = (obj) => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: obj.title,
        author: obj.author,
        content: obj.content
      })
    })
    .then(response => response.json())
    .then(poemObj => {
      let newPoemsArray = [...this.state.poems, poemObj]
      this.setState({
        poems: newPoemsArray
      })
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(poemsArray => {
      this.setState({
        poems: poemsArray
      })
    })
  }

  favoritesClickHandler = (e, obj) => {
    e.target.textContent === "Add to Favorites" ? 
      this.setState(previousState => {return {
        favorites: [...previousState.favorites, obj]}
      }) 
    : 
      this.setState(previousState => {return {
        favorites: previousState.favorites.filter(favorite => favorite.id !== obj.id)}
    })
  }

    // !this.state.favorites.includes(obj) && this.setState(previousState => {
    //   return {
    //     favorites: [...previousState.favorites, obj]
    //   }}
    // )

    // if (!this.state.favorites.includes(obj)) {   
    //   let newFavorites = [...this.state.favorites, obj]
    //   this.setState({
    //     favorites: newFavorites
    //   })
    // }

  deleteHandler = (obj) => {
    fetch(`http://localhost:6001/poems/${obj.id}`, {
      method: "DELETE"
    })
    let newPoemsArray = this.state.poems.filter(poems => poems.id !== obj.id)
    let newFavoritesArray = this.state.favorites.filter(favorite => favorite.id !== obj.id)
    this.setState({
      poems: newPoemsArray,
      favorites: newFavoritesArray
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleFormClick}>Show/hide new poem form</button>
          {this.state.display && <NewPoemForm newPoemSubmitHandler={this.newPoemSubmitHandler}/>}
          <Favorites favorites={this.state.favorites}/>
        </div>
        <PoemsContainer poems={this.state.poems} favoritesClickHandler={this.favoritesClickHandler} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;
