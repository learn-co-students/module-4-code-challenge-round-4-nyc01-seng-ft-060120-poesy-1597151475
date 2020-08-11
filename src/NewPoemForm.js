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
    e.preventDefault()
    this.props.formSubmitHandler(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}className="new-poem-form">
        <input placeholder="Title" name='title' onChange={this.changeHandler} value={this.state.title}/>
        <input placeholder="Author" name='author' onChange={this.changeHandler} value={this.state.author}/>
        <textarea placeholder="Write your masterpiece here..." onChange={this.changeHandler} name='content' value={this.state.content} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
