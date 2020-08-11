import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isHidden: true,
      poems: []
    }
  }

  toggleHidden (e) {
    this.setState({isHidden: !this.state.isHidden})
  }


  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(response => this.setState({poems: response}))
  }

  formSubmitHandler = (obj) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => this.createPoem(response))
  }

  createPoem = (response) => {
    let newArray = [response,...this.state.poems]
    this.setState({poems: newArray})
  }




  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.toggleHidden.bind(this)}>Show/hide new poem form</button>
          {!this.state.isHidden && <NewPoemForm formSubmitHandler={this.formSubmitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
