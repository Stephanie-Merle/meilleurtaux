import React from 'react';
import Style from './Card.module.css'


const Cards = (props) => {
 return(
    
    <div className={Style.cards}>{props.cardName}</div>
 )
}

export default Cards;
