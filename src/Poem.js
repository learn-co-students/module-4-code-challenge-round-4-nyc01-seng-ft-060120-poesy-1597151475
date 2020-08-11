import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  clickHandler = (e) => {
    e.target.innerText = "Mark as unread"
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
      </div>
    );
  }
}

export default Poem;
