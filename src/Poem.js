import React from "react";

class Poem extends React.Component {
  state = {read: false}

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={() => this.setState({read: !this.state.read})}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
      </div>
    );
  }
}

export default Poem;
