import React from "react";

class NewPoemForm extends React.Component {
  state = {
    newTitle: "",
    newAuthor: "",
    newContent: ""
  }

  addPoem = (e) => {
    e.preventDefault()
    this.props.addPoem(this.state)
    this.setState({
      newTitle: "",
      newAuthor: "",
      newContent: ""
    })
  }

  newTitle = (e) =>{
    this.setState({ newTitle: e.target.value})
  }

  newAuthor = (e) =>{
    this.setState({ newAuthor: e.target.value})
  }

  newContent = (e) =>{
    this.setState({ newContent: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.addPoem}className="new-poem-form">
        <input onChange={this.newTitle} value={this.state.newTitle} placeholder="Title" />
        <input onChange={this.newAuthor} value={this.state.newAuthor} placeholder="Author" />
        <textarea onChange={this.newContent} value={this.state.newContent} placeholder="Write your masterpiece here..." rows={10} />
        <input  type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
