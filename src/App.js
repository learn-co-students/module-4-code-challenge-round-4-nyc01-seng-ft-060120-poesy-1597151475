import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import fetcher from "./fetcher"
let baseUrl = "http://localhost:6001"
let poemsUrl = baseUrl + "/poems"

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount() { fetcher(poemsUrl, this.inStatePoems ) }

  inStatePoems = (data) => this.setState({poems: data})

  handleShowFormClick = () => {
    console.log("form click");
  }

  render() {
    let { poems, showForm } = this.state
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {showForm && <NewPoemForm />}
        </div>
        <PoemsContainer 
            poems={poems}
        />
      </div>
    );
  }
}

export default App;
