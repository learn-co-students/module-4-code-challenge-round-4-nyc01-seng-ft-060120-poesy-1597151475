import React from "react";

class FavoritePoem extends React.Component {
  
  state = {
    markedRead: false
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={()=>{
          this.setState({markedRead: !this.state.markedRead}, () => {
            this.props.readButtonHandler(this.props.poem);
          })
        }}> {"Remove from Read Book List"}</button> 

      </div>
    );
  }
}

export default FavoritePoem;
