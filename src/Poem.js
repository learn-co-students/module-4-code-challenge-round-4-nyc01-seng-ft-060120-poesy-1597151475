import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  readThis = () => {
    let newRead = !this.state.read
    this.setState({
      read: newRead
    })
  }
  

  render() {
    
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {this.state.read ? <button onClick={this.readThis}>Mark as read</button> : <button onClick={this.readThis}>Mark as unread</button> }
        <button >Delete this Poem</button>
      </div>
    );
  }
}

export default Poem;
