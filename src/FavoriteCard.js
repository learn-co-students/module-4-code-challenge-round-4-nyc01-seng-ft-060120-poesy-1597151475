import React from "react";
const FavoriteCard = (props) =>{
  const clickHandler = (e, poemId) => {
    e.preventDefault();
    props.removeFavorite(poemId)
  };
    return (
      <div>
        <h3>{props.poem.title}</h3>
        <p>{props.poem.content}</p>
        <p>
          <strong>- {props.poem.author}</strong>
        </p>
        <button onClick={(e) => clickHandler(e, props.poem.id)}>
          Remove From Favorites
        </button>
      </div>
    );
}

export default FavoriteCard;
