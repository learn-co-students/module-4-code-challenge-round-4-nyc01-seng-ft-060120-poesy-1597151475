import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.props.submitHandler}>
        <input name="title" placeholder="Title" onChange={this.props.changeHandler} />
        <input name="author" placeholder="Author" onChange={this.props.changeHandler} />
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} onChange={this.props.changeHandler} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
