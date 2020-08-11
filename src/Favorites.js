import React from 'react';
import Poem from './Poem'

const Favorites = (props) => {
    return (
        <div className="poems-container">
            <br/>
            <h1>Favorites</h1>
            {props.favs.length!==0 ? props.favs.map(poem => <Poem key={poem.id} poem={poem} inFavContainer={true} />): "You currently have no favorites."}
        </div>
    )
}

export default Favorites;