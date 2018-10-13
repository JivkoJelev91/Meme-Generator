import React, { Component } from 'react';
import Memes from './components/memes'
import Header from './components/header'
import './App.css';

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
