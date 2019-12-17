import React from 'react';
import Title from '../components/Title';
import Style from './PropertyLocation.module.css';
import QuoteInput from '../components/QuoteInput';


const Quote = ()=> {

const quoteData = {
    title: "DÉFINISSONS LE MONTANT DE VOTRE PROJET",
    queries: [
        {title: "Prix du terrain*",
        type: "text",
        answer: null},
        {title: "Montant estimé de votre construction*",
        type: "text",
        answer: null},
        {title: "Montant estimé des travaux",
        type: "text",
        answer: null},
        {title: "Frais de notaire*",
        type: "text",
        answer: null},
        {title: "Budget total estimé du projet",
        type: "text",
        answer: null}
    ]
}
      const n = Object.keys(quoteData.queries)

        return(
            <div className={Style.PropertyLocation}>
              <Title title={quoteData.title} hide={true}/>
              <div className={Style.container}>
                {n? n.map(el =>  <QuoteInput  key={el} {...quoteData.queries[el]} color={el%2===0? true: false}/>):null}
              </div> 
            </div>
        )     
}

export default Quote;