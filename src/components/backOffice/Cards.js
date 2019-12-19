import React from 'react';
import Style from './Cards.module.css';

const Cards = (props) => {
  
 return(
    <div className={Style.container}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6"/></svg>
          <div className={Style.cards}>
                ref: {props.refNumber} 
                </div>
                <div className={Style.cards}>
                Email: {props.emailAddress} 
                </div>
               <div className={Style.cards}>
               Type de bien: {props.propertyType} 
               </div>
              <div className={Style.cards}>
              Etat: {props.propertyState} 
              </div>
              <div className={Style.cards}>
              Montant emprunt: {props.totalCost} 
              </div>
              
               
       </div>

 )
}

export default Cards;