import React from "react";

class Poem extends React.Component {
  
  state = {
    markedRead: false
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={()=>{
          this.setState({markedRead: !this.state.markedRead}, () => {
            this.props.readButtonHandler();
          })
        }}> {!this.state.markedRead ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
