import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poemObj => <Poem key={poemObj.id} poem={poemObj}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
