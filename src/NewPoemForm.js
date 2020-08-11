import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.newPoemSubmitHandler(this.state)
    this.setState({
      title: "",
      author: "",
      content: ""
    })
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." name="content" value={this.state.content} onChange={this.changeHandler} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
