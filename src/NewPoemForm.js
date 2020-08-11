import React from "react";

class NewPoemForm extends React.Component {

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addPoem()
  }

  render() {
    return (
      <form className="new-poem-form">
        <input onChange={this.props.updateFormValue} value={this.props.title} name="title" placeholder="Title" />
        <input onChange={this.props.updateFormValue} value={this.props.author} name="author" placeholder="Author" />
        <textarea onChange={this.props.updateFormValue} value={this.props.content} name="content" placeholder="Write your masterpiece here..." rows={10} />
        <input onClick={this.submitHandler} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
