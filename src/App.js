import { Component } from 'react';
import Mycars from './components/Mycars';
import Welcome from './components/Welcome';
import './App.css';
import Maman from './components/Maman';
import Image from './components/Image';
import Form from './components/Form';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
  }
 

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Welcome />
        <Maman />
        <Image />
        <Form />
      </div>
    )
  }
}

export default App;