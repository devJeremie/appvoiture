import React, { Component } from 'react';
import Car from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

class MyCars extends Component {

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
                        {this.props.title}
                    </MyHeader>
                </Wrapper>

                <Car color='red'>{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color='green'>{this.state.cars[2]}</Car>
            </div>
        )
    }
}

export default MyCars
