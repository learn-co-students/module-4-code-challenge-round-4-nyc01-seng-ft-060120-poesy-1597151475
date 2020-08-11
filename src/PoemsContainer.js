import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
	render() {
		// console.log("from PoemsContainer:", this.props.stateArray)
		let poemList = this.props.stateArray.map((poem) => (
			<Poem poem={poem} key={poem.id} />
		));
		return <div className="poems-container">{poemList}</div>;
	}
}

export default PoemsContainer;
