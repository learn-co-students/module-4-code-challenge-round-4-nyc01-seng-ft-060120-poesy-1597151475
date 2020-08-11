import React from "react";

class NewPoemForm extends React.Component {
  state={
    title: '',
    author: '',
    content: ''
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onCreatePoem(this.state)
  }
  handleTitleChange =(event) => {
    this.setState({title: event.target.value })
  }
  handleAuthorChange =(event) => {
    this.setState({author: event.target.value })
  }
  handleContentChange =(event) => {
    this.setState({content: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input value={this.state.title} onChange={this.handleTitleChange}placeholder="Title" />
        <input value ={this.state.author}onChange={this.handleAuthorChange} placeholder="Author" />
        <textarea value={this.state.content} onChange={this.handleContentChange} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
