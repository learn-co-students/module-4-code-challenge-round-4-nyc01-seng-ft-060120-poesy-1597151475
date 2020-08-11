import React from "react";

class NewPoemForm extends React.Component {
  render() {
    let { handleFormChange } = this.props
    let { title, author, content } = this.props.formData
    return (
      <form className="new-poem-form">
        <input 
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleFormChange}
        />
        <input 
            placeholder="Author" 
            name="author"
            value={author}
            onChange={handleFormChange}
        />
        <textarea 
            placeholder="Write your masterpiece here..." 
            rows={10} 
            name="content"
            value={content} 
            onChange={handleFormChange}   
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
