import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  render() {
    let poems = this.props.poems.map(poem => <Poem key={poem.id} poem={poem} deletePoem={this.props.deletePoem}/>)
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
