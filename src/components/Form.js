import { Component} from 'react'

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "green", "blue"],
        comment: ''
    }

    handleUsername = e => {
        this.setState({
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

    render() {
  return (
    <div>
        <h1>Voici un formulaire</h1>

        <form>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
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
                        this.state.colors.map((color, index) => {
                           return <option key={index} value={color}>{color}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Commentaire</label>
                <textarea value= {this.state.comment} onChange={this.handleComments}></textarea>
            </div>
        </form>
    </div>
  )
    }
}

export default Form
