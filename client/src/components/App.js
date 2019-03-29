import React, { Component } from 'react';
import Memes from './memes'
import Header from './header'
import '../styles/App.css';
import UploadBtn from './UploadBtn';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Memes />
          <UploadBtn />
      </div>
    );
  }
}

export default App;
