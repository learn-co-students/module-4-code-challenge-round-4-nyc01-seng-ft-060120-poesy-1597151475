import React from "react";

class NewPoemForm extends React.Component {
  state = { 
    title: "",
    author: "",
    content: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault() 

    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => this.props.addNewPoem(response))
    .then(this.props.toggleFormClicked())
  }
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
        <input name= "author" placeholder="Author" value={this.state.author} onChange={this.handleChange}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
