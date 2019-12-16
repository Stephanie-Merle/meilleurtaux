import React from 'react';
import Style from './Card.module.css';
import { Link } from "react-router-dom";


const Cards = (props) => {
   
 return(
    <Link to={props.link} onClick={()=> props.setData(props.cardName)} className={props.isChecked? Style.selectedCard : Style.cards}>
       <div className={Style.radio}>
          <div className={props.isChecked? Style.checked : Style.notChecked}></div>
       </div>
       {props.cardName}
   </Link>
 )
}

export default Cards;
