import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./Components/NewPoemForm";
import Favorites from './Containers/FavoritesContainer'

let baseUrl = "http://localhost:6001/poems"

class App extends React.Component {
  

  state = {
    showForm: false,
    poems: [],
    favorites: [],
    search: ""
  }

  formToggle = () => {
    this.setState({showForm: !this.state.showForm})
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(resp => this.setState({poems: resp}))

  }

  submitHandler = (obj) => {
    let newArray = [...this.state.poems, obj]
    this.setState({poems: newArray})

    fetch(baseUrl , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: obj.title,
        author: obj.author,
        content: obj.content
      })
    })
  }


  readButtonHandler = (obj) => {
    console.log("youve reached the read button handler")
    if(this.state.favorites.includes(obj)){
      let newArray = [...this.state.favorites]
      let arr = newArray.filter(obj => obj.id !== obj.id)
      this.setState({favorites:arr})
    }else{
        let newArray = [...this.state.favorites, obj]
        this.setState({favorites: newArray})
    }
  }
 
  deleteButtonHandler = (obj) => {
    let newArray = [...this.state.poems]
    let arr = newArray.filter(fobj => fobj.title !== obj.title)
    this.setState({poems: arr})

    fetch(`${baseUrl}/${obj.id}`, {
      method: 'delete'
    })
    .then(resp => resp.json())
    }

    searchHandler = (obj) => {
        this.setState({search: obj})
      }

    filterFavorites = () => {
      return this.state.favorites.filter(a => a.title.includes(this.state.search))
    }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>{
              this.formToggle()
            }}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.submitHandler}/> : null}
                  <Favorites poems={this.filterFavorites()} readButtonHandler={this.readButtonHandler} searchHandler={this.searchHandler}/> 

        </div>
        <PoemsContainer poems={this.state.poems} readButtonHandler={this.readButtonHandler} deleteButtonHandler={this.deleteButtonHandler}/>
      </div>
    );
  }
}

export default App;
