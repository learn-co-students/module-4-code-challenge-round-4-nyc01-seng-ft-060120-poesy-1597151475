import React from "react";

class Poem extends React.Component {

  favoriteClickHandler = (e) => {
    let id = e.target.id
    this.props.favoritePoem(id)
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.props.poemClickHandler}>Mark as read</button>
        <br></br>
        <button id={this.props.poem.id} onClick={this.favoriteClickHandler}>Favorite</button>
      </div>
    );
  }
}

export default Poem;
