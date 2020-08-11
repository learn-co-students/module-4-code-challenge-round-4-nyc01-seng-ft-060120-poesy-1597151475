import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  clickHandler = () => {
    this.setState(previousState => {
      return {
        read: !previousState.read
      }
    })
  }

  favoritesClickHandler = () => {
    this.props.favoritesClickHandler(this.props.poem)
  }

  deleteClickHandler = (e) => {
    e.preventDefault()
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
          Add to Favorites
        </button>
        <button onClick={this.deleteClickHandler}>
          Delete Poem
        </button>
      </div>
    );
  }
}

export default Poem;
