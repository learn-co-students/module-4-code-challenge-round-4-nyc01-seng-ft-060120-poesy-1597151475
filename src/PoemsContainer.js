import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render(props) {
    const allPoems = this.props.poems.map(poem => <Poem key={poem.id} poem={poem}/>)
    console.log(allPoems)
    return (
      <div className="poems-container">
      
          {allPoems}

      </div>
    );
  }
}

export default PoemsContainer;
