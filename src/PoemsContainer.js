import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  poemsArray = () => {
    return this.props.poemsArray.map(poem => {return <Poem key={poem.id} poem={poem} boolHandler={this.props.boolHandler} />})
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.poemsArray()
        }
      </div>
    );
  }
}

export default PoemsContainer;
