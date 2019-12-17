import React from 'react';
import Style from './CardsContainer.module.css';
import Title from './Title';
import Card from './Card';

const CardsContainer = (props) => {
    const data = props.data;
    
 return(
    <div className={Style.container}>
        <Title title={props.data.title}/>
        <div className={Style.cards_container}>
        {data.cards.map(el => (<Card key={el} cardName={el} setData={props.setData} isChecked={props.choice===el? true : false} link={props.link} /> ))}
        </div>
    </div>
 )
}

export default CardsContainer;
