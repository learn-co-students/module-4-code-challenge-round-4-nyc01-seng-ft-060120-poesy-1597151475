import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites";
const URL = 'http://localhost:6001/poems/'

class App extends React.Component {
  state = {
    poems: [],
    favIds: [],
    showForm: false
  }

  fetchPoems = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({poems: data}))
  }

  postPoem = (poem) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(poem)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({showForm: false});
      this.fetchPoems();
    })
  }

  deletePoem = (id) => {
    fetch(URL+id, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => this.fetchPoems())
  }

  favPoem = (id) => {
    this.setState({favIds: [...this.state.favIds, id]})
  }

  getFavs = () => {
    return this.state.poems.filter(poem => this.state.favIds.includes(poem.id))
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  componentDidMount(){
    this.fetchPoems();
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm postPoem={this.postPoem}/>}
          <Favorites favs={this.getFavs()}/>
        </div>
        <PoemsContainer poems={this.state.poems} favPoem={this.favPoem} deletePoem={this.deletePoem}/>
      </div>
    );
  }
}

export default App;
