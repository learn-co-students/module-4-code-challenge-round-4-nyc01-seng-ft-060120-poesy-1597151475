import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


class App extends React.Component {

  state = {

    poemsArray: [],
    display: false // to toggle between hiding and showing form
  }

  hideClick = () => {
    //something to hide form, so pass this in as props to form
  }

  submitHandler = (obj) => {
    // will need a POST method to update the db with the obj i created on the form
  }





  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poemsArray: poems
      })
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poemsArray} />
      </div>
    );
  }
}

export default App;
