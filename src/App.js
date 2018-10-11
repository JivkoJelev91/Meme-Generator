import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Memes from './memes'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>Meme Generator</header>
          <img src={logo} className="App-logo" alt="logo" />
          <Memes />
      </div>
    );
  }
}

export default App;
