import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  // state={
  //   poemObjects: []
  // }

  // componentDidMount=()=>{
  //   fetch("http://localhost:6001/poems")
  //   .then(response => response.json())
  //   .then(poems =>{
  //     this.setState({
  //       poemObjects: poems
  //     })
  //   })
  // }

  poemCardsGen=(poemsArray)=>{
    return poemsArray.map(poem => <Poem poem={poem} />)
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.poemCardsGen(this.props.poems)
        }
      </div>
    );
  }
}

export default PoemsContainer;
