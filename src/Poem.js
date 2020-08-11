import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  clickHandler = (e) => {
    e.target.innerText = "Mark as unread"
  }

  deleteClickHandler = () => {
    this.props.deleteHandler(this.props.poem.id)
  }
  render() {
    let poem = this.props.poem
    return (
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <p>
          <strong>- By {poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>Mark as read</button>
        <button onClick={this.deleteClickHandler}>Delete Poem</button>

      </div>
    );
  }
}

export default Poem;
