import React from "react";
const baseUrl = "http://localhost:6001/poems"
class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: '',
    author: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, content, author} = this.state 
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json" 
      },
      body: JSON.stringify({
        title, 
        content,
        author 
      })
    })
    .then(res => res.json()) 
    .then(poem => this.props.addPoem(poem)) 
    .catch(e => console.error(e)) 
    this.setState({
      title: '',
      content: '',
      author: '' 
    }) 
  }

  render() {
    const {title, content, author} = this.state 
    return (
      <form onSubmit={this.handleSubmit}   className="new-poem-form">
        <input placeholder="Title"  value={title} name="title" onChange={this.handleChange}/>
        <input placeholder="Author"  value={author} name="author" onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10}  value={content} name="content" onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
