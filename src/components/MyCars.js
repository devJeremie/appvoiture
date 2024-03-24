import React, { Component } from 'react';
import Car from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

class MyCars extends Component {
//fonction qui modifie le h1
    addStyle = (e) => {
        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled');
        }
    }

    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <MyHeader
                        myStyle={this.props.color}
                    >
                        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                    </MyHeader>
                    <p onCopy={this.noCopy}>Voici le texte a ne pas copier</p>
                </Wrapper>

                <Car color='red'>{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color='green'>{this.state.cars[2]}</Car>
            </div>
        )
    }
}

export default MyCars
