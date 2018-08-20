import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="parallax caption">
      <h1 className ="center-me" >Shu</h1>
      
      <h1><span className = "border">I am a Full Stack Developer</span></h1>
      <p>I am a student at Nashville Software School. We have studied HTML, CSS,and Javascript/React.js from front-end. The back-end consists of C# and .NET</p>
      
      </div>
      <p className = "center-me">Test</p>
      <div className="parallax2"></div>
      </React.Fragment>
    )
  }
}

export default App;
