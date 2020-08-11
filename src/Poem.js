import React from "react";

class Poem extends React.Component {

  state = {read: false}

  readOrUnreadBook = (prevState) => {
    return {read: !prevState.read}
  }

  deletePoem = () => {
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
        <button onClick={() => this.setState(this.readOrUnreadBook)}>{this.state.read ? "Mark as Unread" : "Mark as Read"}</button>
        <button onClick={this.deletePoem}>Delete Poem</button>
      </div>
    );
  }
}

export default Poem;
