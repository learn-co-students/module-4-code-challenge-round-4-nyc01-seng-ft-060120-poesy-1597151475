import React from "react";

class NewPoemForm extends React.Component {
	state = {
		title: "",
    author: "",
    content: "",
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.submitHandler(this.state);
	};

	changeHandler = (event) => {
		// console.log(event.target.value)
		// console.log(event.target.name)
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		// console.log(this.props.submitHandler)
		return (
			<form className="new-poem-form" onSubmit={this.submitHandler}>
				<input
					placeholder="Title"
					name="title"
					value={this.state.title}
					onChange={this.changeHandler}
				/>
				<input
					placeholder="Author"
					name="author"
					value={this.state.author}
					onChange={this.changeHandler}
				/>
				<textarea
          placeholder="Write your masterpiece here..."
          name="content"
          value={this.state.content}
          onChange={this.changeHandler}
					rows={10}
				/>
				<input type="submit" value="Share your masterpiece" />
			</form>
		);
	}
}

export default NewPoemForm;
