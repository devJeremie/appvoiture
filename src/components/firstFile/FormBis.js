import { Component} from 'react'
import styled from 'styled-components'
import MyHead from '../MyHeaderOne'
import styles from './../myCss.module.css'

const titreBlue = {
    fontSize : '50px',  
    color: '#3498db' 
}

class FormBis extends Component {
    state = {
        username: '',
        color: '',
        colors: ["", "red", "green", "blue"],
        comment: ''
    }
    // Fonction qui gère la saisie dans le champ "username"
    handleUsername = e => { 
        this.setState({
            // met à jour "username" avec la valeur saisie
            username : e.target.value
        })
    }

    handleColor = event => {
        this.setState({
            color : event.target.value
        })
    }

    handleComments = event => {
        this.setState({
            comment : event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Username: ${this.state.username}, Couleur: ${this.state.color}, Commentaire: ${this.state.comment}`);
    }

    render() {

  return (
    <div>
        <h1 style={{fontSize: 50,color: 'blue'}}>Voici un formulaire</h1>

        <form onSubmit={this.handleSubmit}>
            <div>
                <label style={titreBlue}>Username</label>
                  {/* Champ texte contrôlé par React 
                - value est lié à this.state.username
                - onChange appelle handleUsername pour mettre à jour le state */}
                <input type="text" 
                       value={this.state.username} 
                       onChange={this.handleUsername}
                />
            </div>
            <div>
                <label>Couleur</label>
                <select>
                    <option value='vert'>Vert</option>
                    <option value='rouge'>Rouge</option>
                    <option value='bleu'>Bleu</option>
                </select>
                <select value={this.state.colors} onChange={this.handleColor}>
                    {
                        // On parcourt le tableau this.state.colors avec map()
                        this.state.colors.map((color, index) => {
                            // Chaque option correspond à une couleur du tableau
                            // key = index -> identifiant unique (obligatoire pour React)
                            // value = color -> ce qui sera stocké dans state.color quand choisie
                            // {color} -> texte affiché à l'écran
                           return <option key={index} value={color}>{color}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Commentaire</label>
                <textarea value= {this.state.comment} onChange={this.handleComments}></textarea>
            </div>  
            <button type="submit">Envoyer</button>          
        </form>
        <div>
            <h1 className={styles.green}>Le Commentaire numero 1</h1>
            <MyHead />
          <p className= "bigFont">Style en props</p>
        </div>      
    </div>
  )
    }
}

export default FormBis

 
