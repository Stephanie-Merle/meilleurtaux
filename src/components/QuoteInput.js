import React from 'react';
import infos from '../assets/infos.png';
import Style from './CustomInput.module.css';
import ErrorMsg from './ErrorMsg';


const QuoteInput = (props)=> {
       
    // checking if input is only numbers before returning handleQuote function
    const checkingNumber = (e, el)=>{
        if(isNaN(e)){
            console.log("NOT VALID INPUT")
        }else{
            props.handleQuote({[el]:e})
        }
    }

   return (
       <div className={props.color? [Style.custom_input, Style.color].join(" "): Style.custom_input}>
            <div className={Style.title}>{props.title}</div>
            <img src={infos} alt="info" />
            <div className={Style.fixer}>
                <input 
                className={Style.quote}
                type="text"
                onChange={(e)=> checkingNumber(e.target.value, props.value)}
                value={props.data[props.value]}
                required={props.error && props.i!==2}
                /><span>€</span>
                {props.error && !props.data[props.value] && props.i!==2? <div className={Style.space}> <ErrorMsg error={props.error} text="Veuillez renseigner ce montant" /></div>: null}
            </div>
        </div>
   )
}
export default QuoteInput;