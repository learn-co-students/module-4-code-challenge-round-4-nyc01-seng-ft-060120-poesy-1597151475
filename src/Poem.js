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
          ? <button className="ui yellow button" onClick={this.toggleRead}>Mark as Unread</button>
          : <button className="ui blue button" onClick={this.toggleRead}>Mark as read</button>}
          <br></br><br></br>
          <button className="ui red button" onClick={() => this.props.handleDelete(this.props.poem.id)}>Delete</button>
        </p>
        {/* <button onClick={this.toggleRead}>Mark as read</button> */}
      </div>
    );
  }
}

export default Poem;
