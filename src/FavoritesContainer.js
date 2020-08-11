import React, {Component} from 'react';
import Poem from './Poem'

class FavoritesContainer extends Component {
    render() {
        return (
            <div>
                <h2>My Favorites</h2>
                {
                    this.props.poems.map(poem => <Poem key={poem.id} poem={poem} poemAction={this.props.removePoem} />)
                }
            </div>
        )
    }
}

export default FavoritesContainer; 