import {Component} from 'react'
import MyHead from './MyHeaderOne'
import styles from './myCss.module.css'
import styled from 'styled-components'
import Btn from './CustomBtn'

const Title = styled.h1
    `
    color: purple;
    font-size: 80px;
    `
const Button = styled.button
    `
    background: black;
    font-size: 15px;
    color: #ffffff;
    padding: 12px 13px;
    border-radius: 10px;
    `
const success = {
    backgroundColor: 'green',
    color: 'black'
}
const red = {
    backgroundColor: 'red',
    color: 'white'
}
const blue = {
    backgroundColor: 'blue',
    color: 'white'
}

const sayHello = () => {
    alert('Hello World');
}
const sayGoodbye = () => {
    alert('GoodBye World');
}
const ReactEnd = () => {
    alert('Welcome Hooks');
}


class Form extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.green} >Un titre en vert</h1>
                <MyHead />
                <Title>Commentaire 1</Title>
                <button className='btn btn-primary'>Valider</button>
                <Button>Valider 2</Button>
                <Btn 
                    handleClick={sayHello}
                    btnStyle={success}
                > Cliquez sur ce bouton</Btn>
                <Btn 
                    handleClick={sayGoodbye}
                    btnStyle={blue}
                > Cliquez sur ce bouton</Btn>
                <Btn 
                    handleClick={ReactEnd}
                    btnStyle={red}
                > Cliquez sur ce bouton</Btn>
            </div>
          )
    }
  
}

export default Form
