import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.postPoem(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input onChange={this.changeHandler} value={this.state.title} name='title' placeholder="Title" />
        <input onChange={this.changeHandler} value={this.state.author} name='author' placeholder="Author" />
        <textarea onChange={this.changeHandler} value={this.state.content} name='content' placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
