import React from 'react';
import Style from './CardsContainer.module.css';
import Title from './Title';
import Card from './Card';

const CardsContainer = (props) => {
 return(
    <div className={Style.container}>
        <Title title={props.data.title}/>
        <div className={Style.cards_container}>
            <Card cardName={props.data.cards[0]} />
            <Card cardName={props.data.cards[1]} />
        </div>
    </div>
 )
}

export default CardsContainer;
