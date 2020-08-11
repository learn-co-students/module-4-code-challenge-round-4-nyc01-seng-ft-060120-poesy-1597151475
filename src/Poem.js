import React from "react";

class Poem extends React.Component {
  state = {
    clicked: false
  }

  clickRead = () => {
    // console.log("clicked read")
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poemInfo.title}</h3>
        <p>{this.props.poemInfo.content}</p>
        <p>
          <strong>- {this.props.poemInfo.author}</strong>
        </p>
        {this.state.clicked ? <button onClick={this.clickRead}>Mark as unread</button> : <button onClick={this.clickRead}>Mark as read</button> }
        <br></br>
        <br></br>
        <button onClick={() => this.props.deletePoem(this.props.poemInfo)} className="deleteBtn">DELETE</button>
      </div>
    );
  }
}

export default Poem;
