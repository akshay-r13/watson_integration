import React, { Component } from 'react';
import './App.css';
const JsonTable = require('ts-react-json-table');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in:false,
      text:null,
      output:null,
    };
  }
  handleTextChange(e){
    e.preventDefault();
    this.setState({text:e.target.value})
  }
  handleSubmission(e){
    e.preventDefault();
    fetch('https://api.quantifier67.hasura-app.io/intent' , {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'content-type': 'application/json',
      },
      body : JSON.stringify({'text':this.state.text}),
    }).then((response) => response.json())
    .then((data) => {
      this.setState({output:data})
    }).catch( (err) => {
      console.log(err);
    });
  }
  showOutput(){
    if(this.state.output){
      var items = this.state.output['keywords'];
      return(
        <JsonTable rows={items} />
      );
    }
    return("Nptjong")
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hello !</h1>
          This is a simple integration to demonstrate to you the power of Natural Language Processing APIs.
          This site uses the IBM Watson API for Processing your text.
          Enter some text below to see it's working.
        </div>
        <div className="form">
          <form>
            <input type="text" placeholder="Enter text here" onChange={this.handleTextChange.bind(this)}/>
            <input type="submit" value="submit" onClick={this.handleSubmission.bind(this)}/>
          </form>
        </div>
        <div className="output">
            {this.showOutput()}
        </div>
        <div className="footer">
          Powered by <img src="http://authenticmedicine.com/wp-content/uploads/2017/10/IBM-Watson_logo2-e1493752611672.png" alt="watson-logo"/>
        </div>
      </div>
    );
  }
}

export default App;
