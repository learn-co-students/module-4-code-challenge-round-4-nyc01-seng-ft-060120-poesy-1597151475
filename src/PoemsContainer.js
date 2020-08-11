import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    let { poems } = this.props
    return (
      <div className="poems-container">
        { poems.map( p => <Poem key={p.key} poem={p}/> ) }
      </div>
    );
  }
}

export default PoemsContainer;
