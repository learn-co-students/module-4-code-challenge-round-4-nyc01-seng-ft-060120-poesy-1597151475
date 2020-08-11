import React from "react";
import "./App.css";
import poems from "./db"
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


class App extends React.Component {


  state = {
    display: false,
    poems: poems
  }

  handleClick = () => {
    let viewBoolean = !this.state.display
    this.setState({
      display: viewBoolean
    })
  }

  submitHandler = (obj) => {
    this.setState({ poems: [obj, ...this.state.poems] })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}> Show/hide new poem form</button>
          {this.state.display?
          <NewPoemForm submitHandler={this.submitHandler} />
          : null }
        </div>
        <PoemsContainer poems={poems}/>
      </div>
    );
  }
}

export default App;
