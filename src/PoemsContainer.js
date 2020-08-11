import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  render() {
    const poems = this.props.poems.map(poem => 
      <Poem
        key={poem.id}
        title={poem.title}
       content ={poem.content}
        author ={poem.author} 
      />)
    return (
      <div className="poems-container">
        {
          poems
        }
      </div>
    );
  }
}

export default PoemsContainer;
