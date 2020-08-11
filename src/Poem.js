import React from "react";

class Poem extends React.Component {

  state = {
    read:true
  }

  read=(e)=>{
    console.log(this.state.read)
    if(this.state.read){
      e.target.innerText = "Mark as unread"
    }else{
      e.target.innerText = "Mark as read"
    }
    this.setState({
      read: !this.state.read
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
        <button onClick={this.read}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
