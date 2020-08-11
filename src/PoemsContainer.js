import React from "react";
import Poem from "./Poem";



class PoemsContainer extends React.Component {


  render() {
   
    return (
      <div className="poems-container">
        {this.props.poems.map(obj => <Poem poemInfo={obj} key={obj.id}/>)}
      </div>
    );
  }
}

export default PoemsContainer;
