import React from "react";

const API = "http://localhost:6001/poems"

class NewPoemForm extends React.Component {
  state = {
   title: "",
   content: "",
   author: "" 
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)})
        // title: this.state.title,
        // content: this.state.content,
        // author: this.state.author
      // })
      .then(r => r.json())
      .then(newPoem => this.props.handleNewPoem(newPoem),
        this.setState({
          title: "",
          content: "",
          author: ""
        }))
    }
  

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
