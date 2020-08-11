import React from "react";

class Poem extends React.Component {
  state = {
    clicked: true  
  }

  handleClick = (e) => {
    const val = this.state.clicked 
    this.setState({
      clicked: !val 
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={(e) => this.handleClick(e)}>{this.state.clicked ? "Mark as read" : "Mark as unread"}</button>
        <button onClick={() => this.props.poemAction(this.props.poem.id)}>Favorite</button>
        <button onClick={() => this.props.deletePoem(this.props.poem.id)}>Delete</button>
      </div>
    );
  }
}

export default Poem;
