import React from "react";

class NewPoemForm extends React.Component {
  
  state = {
    title: "",
    author: "",
    content: ""
  }

  handleSubmit=(e)=> {
    e.preventDefault()
    console.log(e)
  }

  handleChange=(e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: [e.target.value]
    })
    
  }
 
 
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input onChange={this.handleChange} name="title" value={this.state.title} placeholder="Title" />
        <input onChange={this.handleChange} name="author" value={this.state.author} placeholder="Author" />
        <textarea onChange={this.handleChange} name="content" value={this.state.content} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
