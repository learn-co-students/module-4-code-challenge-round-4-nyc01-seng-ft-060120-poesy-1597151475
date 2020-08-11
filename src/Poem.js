import React from "react";

class Poem extends React.Component {

  state = {
    "Mark as Read": "Read",
    "Read": "Mark as Read",
    buttonValue: "Mark as Read"
  }

  handleClick = () => this.setState({ buttonValue: this.state[this.state.buttonValue]})



  render() {
    let { author, content, title } = this.props.poem
    let { buttonValue } = this.state
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
        <button
            onClick={this.handleClick}
        >{buttonValue}</button>
      </div>
    );
  }
}

export default Poem;
