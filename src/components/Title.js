import React from 'react';
import infos from '../assets/infos.png';
import Style from './Title.module.css';

const Title = (props) => {
 return(
     <div className={Style.title}>
   <div>{props.title}</div>
   <img src={infos} alt="info" />
   </div>
 )
}

export default Title;
