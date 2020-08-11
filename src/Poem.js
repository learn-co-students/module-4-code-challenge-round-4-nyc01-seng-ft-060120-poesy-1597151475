import React from "react";

class Poem extends React.Component {
  state ={
    text: 'Mark as Read'
  }
  handleClick = (event) =>{
    let newText = 'Mark as Unread'
    this.setState({
      text:newText
    })
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
    <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
    <button onClick ={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}

export default Poem;
