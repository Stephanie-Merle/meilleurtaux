import React from 'react';
import Style from './ErrorMsg.module.css';

const ErrorMsg = (props) => {
 return(
     <>
     {props.error? <p className={Style.errorMsg}>{props.text}</p> : null }
   
   </>
 )
}

export default ErrorMsg;
