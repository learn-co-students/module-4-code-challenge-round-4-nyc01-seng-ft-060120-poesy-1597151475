import React from "react";

class NewPoemForm extends React.Component {
  state={
    title: "",
    author: "",
    content: ""
  }

  formController=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  poster=(e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.post(this.state)
  }

  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.formController}/>
        <input placeholder="Author" name="author" value={this.state.author}  onChange={this.formController}/>
        <textarea placeholder="Write your masterpiece here..." name="content" rows={10} value={this.state.content} onChange={this.formController}/>
        <input type="submit" value="Share your masterpiece" onClick={this.poster} />
      </form>
    );
  }
}

export default NewPoemForm;
