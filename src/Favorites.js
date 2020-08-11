import React from 'react'
import FavoriteCard from './FavoriteCard'

const Favorites = (props) => {

  const renderPoems = () => {
    return props.poems.map((poem, index) => (
      <FavoriteCard removeFavorite={props.removeFavorite} key={index} poem={poem} />
    ));
  };

  return (
    <div className="poems-container">
      {renderPoems()}
    </div>
  );
   

}

export default Favorites;