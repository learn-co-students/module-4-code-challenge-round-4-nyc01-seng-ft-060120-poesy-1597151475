import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites";

let poemsUrl = `http://localhost:6001/poems/`;
class App extends React.Component {

  state = {
    poems: [],
    favoritesIds: [],
    showPoem: false
  }

  addPoem = (poem) => {
    fetch(poemsUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(poem),
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ poems: [...this.state.poems, data] }));
  }

  formHandler = (e) => {
    e.preventDefault()
    this.setState({showPoem: !this.state.showPoem})
  }

  faveHandler = async (e, poemId) => {
    e.preventDefault()
    await this.setState({ favoritesIds: [...this.state.favoritesIds, poemId] });
  }

  setFavorites = () => {
    return this.state.poems.filter((poem) =>
      this.state.favoritesIds.includes(poem.id)
    );
  }

  removeFavorite = (poemId) => {
    this.setState({favoritesIds: this.state.favoritesIds.filter(id => id !== poemId)})
  }

  componentDidMount() {
    fetch(poemsUrl)
      .then((resp) => resp.json())
      .then((data) => this.setState({poems: data}))
  }

  deletePoem = (epoemId) => {
    fetch(poemsUrl + poemId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then(resp=>resp.json())
    .then(this.setState({poems: this.state.poems.filter(poem=> poem.id !== poemId)}))
  }
  
  render() {
    let favorites = this.setFavorites()
    console.log(favorites)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={(e) => this.formHandler(e)}>Show/hide new poem form</button>
          {this.state.showPoem ? <NewPoemForm addPoem={this.addPoem} /> : null}
        </div>
        <PoemsContainer deletePoem={this.deletePoem} faveHandler={this.faveHandler} poems={this.state.poems} />
        <Favorites removeFavorite={this.removeFavorite} poems={favorites}/>
      </div>
    );
  }
}

export default App;
