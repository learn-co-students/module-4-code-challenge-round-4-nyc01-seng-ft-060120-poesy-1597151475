import React from 'react'

class FavoritesSearch extends React.Component{
	
	state = {
		search: ""
	}

	render(){
		return(
			<form> 
				<input type="text" value={this.state.search} onChange={(e)=>{
					this.setState({search: e.target.value}, ()=> {
							this.props.searchHandler(this.state.search)
						})
					}} placeholder="Search Read Poems"/>
			</form> 
		)
	}
}

export default FavoritesSearch