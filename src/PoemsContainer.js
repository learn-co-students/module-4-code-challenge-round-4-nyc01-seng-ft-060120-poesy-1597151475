import React from "react";
import Poem from "./Poem";

const PoemsContainer = (props) => {

  const getPoems = () => {
    return props.poems.map(poem => <Poem key={poem.id} poem={poem} favoritesClickHandler={props.favoritesClickHandler} deleteHandler={props.deleteHandler}/>)
  }
  
    return (
      <div className="poems-container">
        {
          getPoems()
        }
      </div>
    );
}

export default PoemsContainer;
