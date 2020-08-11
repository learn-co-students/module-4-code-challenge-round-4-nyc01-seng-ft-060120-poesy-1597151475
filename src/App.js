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
    showForm: false,
    formData: {title: "", author: "", content: ""}
  }

  componentDidMount() { fetcher(poemsUrl, this.inStatePoems ) }

  inStatePoems = (data) => this.setState({poems: data})

  handleShowFormClick = () => this.setState({showForm: !this.state.showForm})

  handleFormChange = e => {
    let t = e.target 
    let newFormData = {...this.state.formData}
    newFormData[t.name] = t.value
    this.setState({ formData: newFormData })
  } 

  handleFormSubmit = (e) => {
    e.preventDefault()
    let { formData } = this.state
    fetcher(poemsUrl, this.inStateNewPoem, {method: "POST", body: formData})
  }

  inStateNewPoem = newPoem => this.setState({ poems: [ ...this.state.poems ].concat( newPoem ) })

  render() {
    let { poems, showForm, formData } = this.state
    return (
      <div className="app">
        <div className="sidebar">
          <button
              onClick={this.handleShowFormClick}
          >Show/hide new poem form</button>
          {showForm && <NewPoemForm formData={formData} handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit}/>}
        </div>
        <PoemsContainer 
            poems={poems}
        />
      </div>
    );
  }
}

export default App;
