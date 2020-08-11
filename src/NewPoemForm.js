import React from "react";

class NewPoemForm extends React.Component {

  submitHandler = (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.newTitle.value
    const author = form.newAuthor.value
    const content = form.newContent.value
    form.reset()
    this.props.addPoem({title, author, content})
  }
  render() {
    return (
      <form onSubmit={(e) => this.submitHandler(e)} className="new-poem-form">
        <input name='newTitle' placeholder="Title" />
        <input name='newAuthor' placeholder="Author" />
        <textarea name='newContent' placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
