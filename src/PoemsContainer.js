import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  getChildrenPoems() {
    return this.props.poems.map((poem) => 
      <Poem title={poem.title} content={poem.content} author={poem.author} />
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
