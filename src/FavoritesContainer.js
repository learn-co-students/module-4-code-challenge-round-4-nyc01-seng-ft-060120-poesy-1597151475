import React from 'react'
import Poem from './Poem'
import FavoritePoem from './FavoritePoem'
class FavoritesContainer extends React.Component{
	render(){
		let favorites = this.props.poems.map(poem => <FavoritePoem poem={poem} readButtonHandler={this.props.readButtonHandler} />)
		return(
			<div> 
				<h1> Books Read </h1> 
				{favorites}
			</div> 
		)
	}
}

export default FavoritesContainer