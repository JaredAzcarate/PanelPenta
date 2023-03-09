import React from "react"; 
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/lib/styles.scss';

function Card({numero, nombre, expiracion, codigo}) {
    return(
        <Cards
        number={numero}
        name={nombre}
        expiry={expiracion}
        cvc={codigo}
        />
    )
}

export default Card;