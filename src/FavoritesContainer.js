import React from "react";
import Poem from "./Poem";

class FavoritesContainer extends React.Component {
    filterPoems() {
        return this.props.poems.filter(poem => poem.favorite)
    }

  render() {
    return (
      <div className="poems-container">
        {this.filterPoems().map(poem => <Poem poem={poem} key={poem.id} readHandler={this.props.readHandler} handleDelete={this.props.handleDelete} favoriteHandler={this.props.favoriteHandler}/>)}
      </div>
    );
  }
}

export default FavoritesContainer;
