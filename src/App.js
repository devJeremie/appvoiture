import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import './App.css';
import Maman from './components/Maman';
import Image from './components/Image';
import Form from './components/Form';
import FormBis from './components/firstFile/FormBis';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
    color: 'blue',
  }
 

  render() {
    return (
      <div className='App'>
        <Mycars 
          title={this.state.titre} 
          color={this.state.color} 
        />

        <Welcome />
        <Maman />
        <Image />
        <Form />
        <FormBis />
        {/* <Form 
          head={true}
        /> */}
      </div>
    )
  }
}

export default App;