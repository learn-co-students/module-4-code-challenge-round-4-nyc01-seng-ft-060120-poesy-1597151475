import React from "react";

class Poem extends React.Component {
  state = {
    buttonContent: "Mark as read"
  }
  
  
  clickHandler = () => {
    if(this.state.buttonContent === "Mark as read"){
      // console.log(this.state.buttonContent)
      this.setState({buttonContent: "Mark as Unread"})
    } else {
      this.setState({buttonContent: "Mark as read"})
    }
  }
  
  render() {
		// console.log(this.props.poem)
		return (
			<div>
				<h3>{this.props.poem.title}</h3>
				<p>{this.props.poem.content}</p>
				<p>
					<strong>-{this.props.poem.author}</strong>
				</p>
    <button onClick={this.clickHandler}>{this.state.buttonContent}</button>
			</div>
		);
	}
}

export default Poem;
