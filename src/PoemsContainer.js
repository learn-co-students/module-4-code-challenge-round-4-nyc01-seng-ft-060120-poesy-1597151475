import React from "react";
import Poem from "./Poem";

const PoemsContainer = (props) => {
  return (
    <div className="poems-container">
      {
        props.poems.map(poem => <Poem key={poem.id} poem={poem} favPoem={props.favPoem} deletePoem={props.deletePoem} />)
      }
    </div>
  );
}

export default PoemsContainer;
