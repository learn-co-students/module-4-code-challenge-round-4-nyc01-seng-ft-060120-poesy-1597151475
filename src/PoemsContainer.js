import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {this.props.poems.map(poem => <Poem poem={poem} key={poem.id} readHandler={this.props.readHandler} handleDelete={this.props.handleDelete} favoriteHandler={this.props.favoriteHandler}/>)}
      </div>
    );
  }
}

export default PoemsContainer;
