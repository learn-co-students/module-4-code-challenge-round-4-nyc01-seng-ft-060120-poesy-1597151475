import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
let baseUrl = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    display: true,
    poems: []
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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showHandler}> Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm submitHandler={this.submitHandler}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
