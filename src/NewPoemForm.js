import React from "react";

class NewPoemForm extends React.Component {

  state = {
    name: "",
    image: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
        name: "",
        image: ""
    })
}

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input onChange={this.handleChange} type="text" placeholder="Title" name="name" value={this.state.name}  />
        <input onChange={this.handleChange} type="text" placeholder="Author" name="image" value={this.state.image}  />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" name="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
