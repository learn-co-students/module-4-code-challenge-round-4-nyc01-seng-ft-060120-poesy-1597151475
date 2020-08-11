import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
  	let poems = this.props.poems.map(poem => <Poem poem={poem} readButtonHandler={this.props.readButtonHandler} deleteButtonHandler={this.props.deleteButtonHandler} />)
    return (
      <div className="poems-container">
        {
          poems
        }
      </div>
    );
  }
}

export default PoemsContainer;
