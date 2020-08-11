import React from "react";

class Poem extends React.Component {

  clickHandler = () => {
    console.log("clicked")

  }

  readBool = () => {
    if(this.props.poem.read === false){
      return "Mark as read"
    }
    else{
      return "Mark as unread"
    }
  }



  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>-{this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.readBool()}</button>
      </div>
    );
  }
}

export default Poem;

