import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  poemClickHandler = (e) => {
    if (e.target.innerText === 'Mark as read'){
      e.target.innerText = 'Mark as Unread'
    } else if (e.target.innerText === 'Mark as Unread'){
      e.target.innerText = 'Mark as read'
    }
    // e.target.innerText = 'Mark as Read' ? e.target.innerText = 'Mark as Unread' : e.target.innerText = 'Mark as Read'
  }

  render() {
    let poems = this.props.poems.map(poem => <Poem poem={poem} key={poem.id} poemClickHandler={this.poemClickHandler}/>)
    return (
      <div className="poems-container">
        {poems}
      </div>
    );
  }
}

export default PoemsContainer;
