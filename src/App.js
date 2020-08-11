import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from "./FavoritesContainer";
const baseUrl = "http://localhost:6001/poems"
class App extends React.Component {
  state = {
    poems: [],
    display: false, 
    favorites: [] 
  }

  componentDidMount() {
    this.fetchPoems() 
  }

  fetchPoems = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(poem => this.setState({
        poems: poem 
      }))
  }

  addFavorite = (id) => {
    if (!this.state.favorites.find(favorite => favorite === id)) {
      this.setState({
        favorites: [...this.state.favorites, id] 
      })
    }
  }

  removeFavorite = (id) => {
    this.setState({
      favorites: this.state.favorites.filter(poem => poem !== id) 
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display 
    this.setState({
      display: newBoolean 
    })
  }

  addPoem = (poem) => {
    this.setState({
      poems: [...this.state.poems, poem] 
    })
  }

  deletePoem = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE" 
    })
    .then(res => {
      const newPoems = this.state.poems.filter(poem => poem.id !== id) 
      this.setState({
        poems: newPoems 
      })
    })
  }

  render() {
    let favoritePoems = this.state.favorites.map(id => this.state.poems.find(poem => poem.id === id)) 
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm addPoem={this.addPoem}/> : null }
        </div>
        <PoemsContainer poems={this.state.poems} addFavorite={this.addFavorite} deletePoem={this.deletePoem}/>
        <FavoritesContainer poems={favoritePoems} removeFavorite={this.removeFavorite}/> 
      </div>
    );
  }
}

export default App;
