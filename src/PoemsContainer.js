import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = (poems) => {
    return this.props.poems.map((poem, index) => <Poem deletePoem={this.props.deletePoem} faveHandler={this.props.faveHandler} key={index} poem={poem}/>)
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
