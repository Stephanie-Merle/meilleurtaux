import React from 'react';
import Title from '../components/Title';
import Style from './PropertyLocation.module.css';
import QuoteInput from '../components/QuoteInput';
import quoteData from '../assets/quoteData.json';


const Quote = ()=> {

console.log(JSON.stringify(quoteData))
      const n = Object.keys(quoteData.queries)

        return(
            <div className={Style.PropertyLocation}>
              <Title title={quoteData.title} hide={true}/>
              <div className={Style.container}>
                {n? n.map(el =>  <QuoteInput  key={el} {...quoteData.queries[el]} color={el%2===0? false: true}/>):null}
              </div> 
            </div>
        )     
}

export default Quote;