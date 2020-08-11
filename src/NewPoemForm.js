import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state) //this will pass the info of the obj i created on the form
    this.setState({
      title: "",
      content: "",
      author: ""
    })

  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.changeHandler}/>
        <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.changeHandler}/>
        <textarea type="text" name="content" value={this.state.content} placeholder="Write your masterpiece here..." rows={10} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
