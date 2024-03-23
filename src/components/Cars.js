import React from 'react'
import Wrapper from './Wrapper';

const Car = ({children, color}) => {

    const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Néant</p>);

    return children && (
        <Wrapper>
            <p>Marque: {children}</p>
            <p>{colorInfo}</p>
        </Wrapper>
    ) 
}
    


export default Car
