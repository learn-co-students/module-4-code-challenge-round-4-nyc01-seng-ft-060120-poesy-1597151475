import React from "react";

class Poem extends React.Component {
  state = { 
    read: false
  }

  handleClick = (e) => {
    this.setState({read: !this.state.read})
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- By {this.props.author}</strong>
        </p>
        <>{this.state.read ? <button onClick={this.handleClick}>Mark as Unread</button> : <button onClick={this.handleClick}>Mark as Read</button>}</>
      </div>
    );
  }
}

export default Poem;
