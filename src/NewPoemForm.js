import React from "react";



class NewPoemForm extends React.Component {

  state = {title:"", author:"", content:""}
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  formSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({title:"", author:"", content:""})
  }

  render() { 
    return (
      <form className="new-poem-form" onSubmit={this.formSubmitHandler}>
        <input onChange={this.changeHandler} placeholder="Title" name="title" value={this.state.title}/>
        <input onChange={this.changeHandler} placeholder="Author" name="author" value={this.state.author} />
        <textarea onChange={this.changeHandler} placeholder="Write your masterpiece here..." name="content" value={this.state.content} rows={10} />
        <input onChange={this.changeHandler} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
