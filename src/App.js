import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

let url = 'http://localhost:6001/poems'

class App extends React.Component {

  state = {
    showForm: false,
    poems: [],
    title: "",
    author: "",
    content: "",
  }

  componentDidMount(){
    fetch(url)
    .then(resp => resp.json())
    .then(poems => this.setState({poems: poems}))
  }

  showHideForm = () => {
    let boolean = !this.state.showForm
    this.setState({
      showForm: boolean
    })
  }

  updateFormValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(e.target.value)
  }

  addPoem = () => {
    fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        content: this.state.content
      })
    })
    .then(resp => resp.json())
    .then(poem => this.renderPoem(poem))  
      this.setState({
        showForm: false,
        title: "",
        author: "",
        content: ""
      })
  }

  renderPoem = (poem) => {
    let newPoems = [poem, ...this.state.poems]
    this.setState({ poems: newPoems})
  }

  render() {
    // console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showHideForm} >Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm updateFormValue={this.updateFormValue}
          title={this.state.title} author={this.state.author} content={this.state.content}
          addPoem={this.addPoem} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
