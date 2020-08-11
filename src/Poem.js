import React from "react";
class Poem extends React.Component {
  state = {
    toggle: false
  }
  clickHandler = (e) => {
    e.preventDefault()
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={(e) => this.clickHandler(e)}>{this.state.toggle ? 'Read' : 'Unread' }</button>
        <button onClick={(e) => this.props.faveHandler(e, this.props.poem.id)}>Add to Favorites</button>
      </div>
    );
  }
}

export default Poem;
