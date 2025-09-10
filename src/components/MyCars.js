import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {
    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedes', color: 'black', year: 2010},
            {name: 'Peugeot', color: 'green', year: 2018},
          ]
    }

//fonction pour vieillir un vehicule
    addtenYears = () => {
        const updatedState = this.state.voitures.map((param) =>{
            return param.year -=10;
        })
        this.setState({
            updatedState
        })
    }

    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;

        //ans, an
        let frenchYearStr = "";
        if (age === 1 ) {
            frenchYearStr = "an";
        }else if (age > 1) {
            frenchYearStr = "ans";
        }
        return `${age}  ${frenchYearStr}`;
    }

    render() {

       return (
            <div>
               <h1 style={{ color: this.props.color }}>
                   {this.props.title}
               </h1>

                <button onClick={this.addtenYears}>+ 10 ans</button>
                
                {
                    this.state.voitures.map(({name, color, year}, index) => {
                        return(
                            
                            <div key={index}>
                                <Car
                                    nom={name}
                                    color={color}
                                    year={year}>
                                    {name}
                                </Car>

                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Mycars