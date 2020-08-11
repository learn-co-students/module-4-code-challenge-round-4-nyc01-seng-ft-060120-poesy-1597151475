import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    console.log(this.props.poems)
    return (
      <div className="poems-container">
        {this.props.poems.map(poem => <Poem key={poem.id} poem={poem} handleDelete={this.props.handleDelete}/>)}
      </div>
    );
  }
}

export default PoemsContainer;
