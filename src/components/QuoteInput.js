import React from 'react';
import infos from '../assets/infos.png';
import Style from './CustomInput.module.css';


const QuoteInput = (props)=> {

        
   return (
       <div className={props.color? [Style.custom_input, Style.color].join(" "): Style.custom_input}>
            <div className={Style.title}>{props.title}</div>
            <img src={infos} alt="info" />
            <div className={Style.fixer}>
                <input 
                className={[Style.select, Style.border].join(" ")}
                
                />€
                
            </div>
        </div>
   )
}
export default QuoteInput;