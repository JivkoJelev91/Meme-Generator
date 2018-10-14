import React, { Component } from 'react';
import Memes from './memes'
import Header from './header'
import '../styles/App.css';

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
