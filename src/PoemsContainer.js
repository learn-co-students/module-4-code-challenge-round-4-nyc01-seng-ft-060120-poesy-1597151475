import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = (poems) => {
    return this.props.poems.map((poem, index) => <Poem key={index} poem={poem}/>)
  }
  render() {
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    );
  }
}

export default PoemsContainer;
