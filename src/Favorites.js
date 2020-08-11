import React from 'react'
import Poem from "./Poem";

class Favorites extends React.Component {
    render(){
        console.log(this.props.favorites)
        let favoritePoems = []
        this.props.favorites.length >= 1 ? favoritePoems = this.props.favorites.map(poem => <Poem poem={poem} key={poem.id}/>) : favoritePoems = []
        return(
            <div>
            <h1>Hello From Favorites</h1>
            {favoritePoems}
            </div>
            
        )
    }
}

export default Favorites