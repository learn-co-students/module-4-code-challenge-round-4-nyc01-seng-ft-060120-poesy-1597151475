import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    let { poems, title, handleFavoriteClick } = this.props
    return (
      <div className="poems-container">
        <h1>{title}</h1>
        { poems.map( p => <Poem key={p.key} poem={p} handleFavoriteClick={handleFavoriteClick} /> ) }
      </div>
    );
  }
}

export default PoemsContainer;
