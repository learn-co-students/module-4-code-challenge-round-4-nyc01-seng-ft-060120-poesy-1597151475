import React from "react";

class Poem extends React.Component {

  state = {
    reddIt: false
  }


  readBtn = () => {
    this.setState({
      reddIt: !this.state.reddIt
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.readBtn}>{this.state.reddIt ? 'Mark as read' : 'Mark as unread'} </button>
      </div>
    );
  }
}

export default Poem;
