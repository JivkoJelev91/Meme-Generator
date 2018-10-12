import React, { Component } from 'react';
import './App.css';
import Memes from './memes'
import Header from './header'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Memes />
      </div>
    );
  }
}

export default App;
