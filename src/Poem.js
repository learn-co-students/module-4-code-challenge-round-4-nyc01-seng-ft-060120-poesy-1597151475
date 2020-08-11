import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={() => this.props.readHandler(this.props.poem)}>{!this.props.poem.read ? "Mark as read" : "Mark as unread"}</button>
        <button onClick={() => this.props.favoriteHandler(this.props.poem)}>{!this.props.poem.favorite ? "Favorite" : "Unfavorite"}</button>
        <button onClick={() => this.props.handleDelete(this.props.poem)}>Delete</button>
      </div>
    );
  }
}

export default Poem;
