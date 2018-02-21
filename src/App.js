import React, { Component } from 'react';
import store from './redux/stores';
import SelectionForm from './components/selection-form';

import './App.css';

class App extends Component {

  render() {
    console.log(store.getState())
    return (
      <div className="App">
        <SelectionForm/>
      </div>
    )
  }
}

export default App;
