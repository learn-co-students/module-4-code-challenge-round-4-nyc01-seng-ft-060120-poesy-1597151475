import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: "",
    read: false
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]:e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form" >
        <input placeholder="Title" name="title" value={this.state.name} onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler} />
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.changeHandler} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
