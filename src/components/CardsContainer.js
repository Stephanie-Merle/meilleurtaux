import React, {useEffect} from 'react';
import Style from './CardsContainer.module.css';
import Title from './Title';
import Card from './Card';

const CardsContainer = ({handlePage, data, setData, choice, link}) => {
    
    useEffect(() => {
        handlePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
 return(
    <div className={Style.container}>
        <Title title={data.title}/>
        <div className={Style.cards_container}>
        {data.cards.map(el => (<Card key={el} cardName={el} setData={setData} isChecked={choice===el? true : false} link={link} /> ))}
        </div>
    </div>
 )
}

export default CardsContainer;
