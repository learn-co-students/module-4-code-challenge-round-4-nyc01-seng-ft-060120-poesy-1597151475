import React from 'react'

function Favorites(props) {
    return(
        <div>
        {props.favorites.map(favorite => <h3 key={favorite.id}>{favorite.title}</h3>)}
        </div>
    )
}

export default Favorites