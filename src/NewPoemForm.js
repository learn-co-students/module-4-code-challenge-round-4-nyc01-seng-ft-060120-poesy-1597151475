import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    if (this.state.title && this.state.author && this.state.content) {
      this.props.handleSubmit(this.state)
    }
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit = { this.handleSubmit} >
        <input onChange = { this.handleChange } name = "title" placeholder="Title" value = { this.state.title } />
        <input onChange = { this.handleChange } name = "author" placeholder="Author" value = { this.state.author } />
        <textarea onChange = { this.handleChange } name = "content" placeholder="Write your masterpiece here..." rows={10} value = { this.state.content }/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
