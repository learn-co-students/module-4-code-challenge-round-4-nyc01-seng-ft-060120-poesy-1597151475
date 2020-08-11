import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({read: !this.state.read})
  }

  render() {
    console.log(this.props.poem.id)
    let { id, title, content, author } = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
          <br></br><br></br>
          {this.state.read
          ? <button onClick={this.toggleRead}>Mark as Unread</button>
          : <button onClick={this.toggleRead}>Mark as read</button>}
        </p>
        {/* <button onClick={this.toggleRead}>Mark as read</button> */}
      </div>
    );
  }
}

export default Poem;
