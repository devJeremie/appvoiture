import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
//function qui va modifier le titre au click
  changeTitle = (e) => {
    this.setState({
      titre: 'Nouveau titre'
    })
  }
  // function qui modife le titre via un param
  // changeViaParam = (titre) =>{
  //   this.setState({
  //     titre: titre
  //   })
  // }
  //function qui change le titre via un bind
  changeViaBind = (param) => {
    this.setState({
      titre : param
    })
  }
  //function qui va gerer le state de l'input
  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

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

        <button onClick={this.changeTitle}>Change le H1</button>
        <button onClick={() => this.changeViaParam('Titre via un param')}>Change le H1 via un param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via le bind')}>Change le H1 via un bind</button>
        <p>Input qui change le titre</p>
        <input type='text' onChange={this.changeViaInput} value={this.state.titre} />
    </div>
  );
  }
}

export default App;
