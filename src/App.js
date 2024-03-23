import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {

  state = {
    titre: 'Mon catalogue Voitures',
    color: 'green'
  }

  render () {
  return (
    <div className="App">
      <MyCars 
        title={this.state.titre}
        color={this.state.color}/>
    </div>
  );
  }
}

export default App;
