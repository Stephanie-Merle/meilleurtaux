import React, {useState} from 'react';
import Style from './Cards.module.css';

const Cards = (props) => {
  const [show, setShow] = useState(false); //state to toggle short vs total view
 return(
       <div className={show? Style.total : Style.bigContainer}>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6"/></svg>
    <div className={show? Style.noHover : Style.container} onClick={()=>setShow(show => !show)}> 
          <div className={show? Style.bigCards: Style.cards}>
                ref: {props.refNumber} 
                </div>
                <div className={show? Style.bigCards: Style.cards}>
                Email: {props.emailAddress} 
                </div>
                <div className={show? Style.bigCards: Style.cards}>
                Code Postal: {props.propertyLocation.zip} 
                </div>
               <div className={show? Style.bigCards: Style.cards}>
               Type de bien: {props.propertyType} 
               </div>
              <div className={show? Style.bigCards: Style.cards}>
              Etat: {props.propertyState} 
              </div>
              <div className={show? Style.bigCards: Style.cards}>
              Montant emprunt: {props.totalCost} 
              </div>
              </div>
            {show? <div className={Style.noHover} onClick={()=>setShow(show => !show)}> 
            <div className={Style.bigCards}>
                Pays: {props.propertyLocation.country} 
                </div>
                <div className={Style.bigCards}>
                Usage: {props.propertyUsage} 
                </div>
                <div className={Style.bigCards}>
                Coût terrain: {props.landCost} 
                </div>
               <div className={Style.bigCards}>
               Coût construction: {props.estimatedPrice} 
               </div>
              <div className={Style.bigCards}>
              Coût des travaux: {props.renovationCost} 
              </div>
              <div className={Style.bigCards}>
               
              </div>
                  
                  </div>:null}  
               
      
</div>
 )
}

export default Cards;