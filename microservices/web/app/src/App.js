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
    }).catch((err) => {
      console.log(err);
    });
  }
  showOutput(){
    if(this.state.output){
      if(!this.state.output['message']){
        var items = this.state.output['keywords'];
        console.log(items);
        return(items.map( (keyword) => {
          if(keyword['emotion']){
            return(
            <div className="output">
              <h3>{keyword['text']}</h3>
              <JsonTable className="output-table" rows={[keyword['emotion']]} />
            </div>);
          }
          return(<div></div>);
        }));
      }
      return(this.state.output['message']);
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome !</h1>
          This is a simple integration to demonstrate to you the power of Natural Language Processing APIs.
          This site uses the IBM Watson API for Processing your text.
          Enter some text below to see its working.
        </div>
        <div className="form">
          <form>
            <textarea className="form-text" placeholder="Enter text here" onChange={this.handleTextChange.bind(this)}></textarea>
            <input className="form-button" type="submit" value="submit" onClick={this.handleSubmission.bind(this)}/>
          </form>
        </div>
        <div className="output">
            {this.showOutput()}
        </div>
        <div className="footer">
          Powered by IBM Watson
        </div>
        <div className="github">
          <a href="https://github.com/AkshayRaman97/watson_integration"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="repository"/></a>
        </div>
      </div>
    );
  }
}

export default App;
