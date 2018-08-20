import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">랑스타그램</h1>
        </header>
        <div className="content">
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;
