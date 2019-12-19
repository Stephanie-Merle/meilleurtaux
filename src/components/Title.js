import React from 'react';
import infos from '../assets/infos.png';
import Style from './Title.module.css';

const Title = (props) => {
 return(
     <div className={Style.title}>
   <h1>{props.title}</h1>
   {props.hide? null:  <img src={infos} alt="info" />}
   </div>
 )
}

export default Title;
