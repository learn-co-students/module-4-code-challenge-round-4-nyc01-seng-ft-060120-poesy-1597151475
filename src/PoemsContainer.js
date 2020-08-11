import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  markRead = (poem) => {
    this.props.markRead(poem)
  }

  getChildrenPoems() {
    return this.props.poems.map((poem, index) => 
      <Poem key={index} poem={poem} markRead = {this.markRead}/>
      )
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.getChildrenPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;
