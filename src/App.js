import React, { Component } from 'react';
import store from './redux/stores';
import './App.css';

class App extends Component {

  render() {
    console.log(store.getState())
    return (
      <div className="App">
        <p>testingtestingonetwothree</p>
      </div>
    )
  }
}

export default App;
