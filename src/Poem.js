import React from "react";

class Poem extends React.Component {
  
  state = {
    read: false
  }

  handleClick = (e) => {
    this.setState({
      read: !this.state.read
    })
  }

  textDisplay = () => {
    if (this.state.read === true)
    return (Mark as read)

  }

  
  render(props) {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        <button Onclick = {this.handleClick} >
        {textDisplay} </button>


      </div>
    );
  }
}

export default Poem;
