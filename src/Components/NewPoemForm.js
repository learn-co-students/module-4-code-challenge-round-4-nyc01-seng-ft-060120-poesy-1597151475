import React from "react";

class NewPoemForm extends React.Component {
  
  state = {
    title: "",
    author: "",
    content: ""
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({title: "", author: "", content: ""})
      }}className="new-poem-form">
        <input placeholder="Title" value={this.state.title} onChange={(e)=> {
          this.setState({title: e.target.value})
        }} />
        <input placeholder="Author" value={this.state.author} onChange={(e)=> {
          this.setState({author: e.target.value})
        }}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={(e)=> {
          this.setState({content: e.target.value})
        }} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
