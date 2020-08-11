import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
	state = {
		stateArray: [],
		poemForm: false,
	};
	componentDidMount() {
		fetch("http://localhost:6001/poems")
			.then((resp) => resp.json())
			.then((poems) => this.setState({ stateArray: poems }));
		// .then(poems => console.log(poems))
	}

	formClickHandler = () => {
		// console.log(event)
		if (this.state.poemForm) {
			this.setState({ poemForm: false });
		} else {
			this.setState({ poemForm: true });
		}
	};

	submitHandler = (obj) => {
		// console.log(obj)
		let submitArray = [obj, ...this.state.stateArray];
		// console.log(submitArray)
    this.setState({ stateArray: submitArray });
    
    fetch("http://localhost:6001/poems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'title': `${obj.title}`,
        'author': `${obj.author}`,
        'content': `${obj.content}`
      })
    })
    .then(resp => resp.json())
    .then(poem => console.log(poem))
    
	};

	render() {
		// console.log(this.state)
		// console.log(this.state.poemForm)
		return (
			<div className="app">
				<div className="sidebar">
					<button onClick={this.formClickHandler}>
						Show/hide new poem form
					</button>
					{this.state.poemForm && (
						<NewPoemForm submitHandler={this.submitHandler} />
					)}
				</div>
				<PoemsContainer stateArray={this.state.stateArray} />
			</div>
		);
	}
}

export default App;
