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
          ? <button className="ui mini yellow button" onClick={this.toggleRead}>Mark as Unread</button>
          : <button className="ui mini blue button" onClick={this.toggleRead}>Mark as read</button>}
          <br></br><br></br>
          <button className="ui mini red button" onClick={() => this.props.handleDelete(this.props.poem.id)}>Delete</button>
          <br></br><br></br>
          <button className="ui mini button" onClick={this.handleFave}>Fave</button>
          <br></br><br></br>
          <br></br><br></br>
        </p>
        {/* <button onClick={this.toggleRead}>Mark as read</button> */}
      </div>
    );
  }
}

export default Poem;
