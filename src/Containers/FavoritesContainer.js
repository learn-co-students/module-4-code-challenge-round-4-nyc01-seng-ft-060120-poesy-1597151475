import React from 'react'
import FavoritePoem from '../Components/FavoritePoem'
import FavoritesSearch from '../Components/FavoritesSearch'
class FavoritesContainer extends React.Component{
	render(){
		let favorites = this.props.poems.map(poem => <FavoritePoem poem={poem} readButtonHandler={this.props.readButtonHandler} />)
		return(
			<div> 
				<h1> Poems Read </h1> 
				<FavoritesSearch searchHandler={this.props.searchHandler}/>
				{favorites}
			</div> 
		)
	}
}

export default FavoritesContainer