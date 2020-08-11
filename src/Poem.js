import React from "react";

class Poem extends React.Component {

  markHandler = (e) => { 
    e.target.innerHTML = "Mark as unread"
  }

  deleteHandler = (e) => {
    this.props.deleteHandler(this.props.poem)
  }
  
  render() {
    return (
      <div>
        <h3> {this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        <button onClick={this.markHandler} >Mark as read</button>
        <button onClick={this.deleteHandler}>Delete Poems</button>
      </div>
    );
  }
}

export default Poem;
