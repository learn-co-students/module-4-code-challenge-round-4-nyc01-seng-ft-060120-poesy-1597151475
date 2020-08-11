import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const api = `http://localhost:6001/poems/`

class App extends React.Component {

  state = {
    hideForm: false,
    poems: []
  }

  componentDidMount(){
    fetch(api).then(resp => resp.json()).then(data => this.setState({ poems: data}))
  }

  clickForm = () => {
    this.setState({ hideForm: !this.state.hideForm})
  }

  addPoem = (obj) => {
    fetch(api, {
      method: "POST",
      headers: {
        "content-type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: obj.newTitle,
        content: obj.newContent,
        author: obj.newAuthor
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState({ poems: [...this.state.poems,data]}))
    
  }

  deletePoem = (obj) => {
    // console.log("in app delete", api + obj.id)
    fetch(api + obj.id, {
      method: "DELETE",
      headers: {
        "content-type":"application/json",
        Accept: "application/json"
      }
    })
    let newArray = this.state.poems.filter(poem => poem.id !== obj.id)
    this.setState({ poems: newArray})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickForm}>Show/hide new poem form</button>
          {this.state.hideForm && <NewPoemForm addPoem={this.addPoem}/>}
        </div>
        <PoemsContainer deletePoem={this.deletePoem} poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
