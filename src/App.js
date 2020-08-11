import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from './FavoritesContainer'

let baseUrl = "http://localhost:6001/poems"

class App extends React.Component {
  

  state = {
    showForm: false,
    poems: [],
    favorites: []
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

  readButtonHandler = () => {
    console.log("youve reached the read button handler")

  }
 
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>{
              this.formToggle()
            }}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.submitHandler}/> : null}
                  <Favorites /> 

        </div>
        <PoemsContainer poems={this.state.poems} readButtonHandler={this.readButtonHandler}/>
      </div>
    );
  }
}

export default App;
