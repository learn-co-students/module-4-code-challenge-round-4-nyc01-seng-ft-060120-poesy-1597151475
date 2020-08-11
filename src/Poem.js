import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
    favorite: false
  }

  clickHandler = () => {
    this.setState(previousState => {
      return {
        read: !previousState.read
      }
    })
  }

  favoritesClickHandler = (e) => {
    this.props.favoritesClickHandler(e, this.props.poem)
    this.setState(previousState => {
      return {
        favorite: !previousState.favorite
      }
    })
  }

  deleteClickHandler = () => {
    this.props.deleteHandler(this.props.poem)
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>
          {this.state.read ? "Mark as unread" : "Mark as read" }
        </button>
        <button onClick={this.favoritesClickHandler}>
          {this.state.favorite ? "Remove from Favorites" : "Add to Favorites" }
        </button>
        <button onClick={this.deleteClickHandler}>
          Delete Poem
        </button>
      </div>
    );
  }
}

export default Poem;
