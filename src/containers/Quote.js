import React from 'react';
import Title from '../components/Title';
import Style from './Quote.module.css';
import QuoteInput from '../components/QuoteInput';
import quoteData from '../assets/quoteData.json';
import infos from '../assets/infos.png';


const Quote = ({handleQuote, data})=> {

      const n = Object.keys(quoteData.queries)

      let globalFee = ""
      if(data.estimatedPrice){
        globalFee = Number(data.landCost)+Number(data.estimatedPrice)+Number(data.renovationCost)+Number(data.notaryFees);
      }
      let notaryFees = "";
      if(data.landCost && data.estimatedPrice){
        notaryFees = ((Number(data.landCost)+Number(data.estimatedPrice))*1.8/100).toFixed(0);
      }

        return(
            <div className={Style.quoteScreen}>
              <Title title={quoteData.title} hide={true}/>
              <div className={Style.container}>
                {n? n.map(el =>  <QuoteInput data={data} handleQuote={(el)=> handleQuote({...el, "notaryFees":notaryFees, "totalCost": globalFee})} key={el} {...quoteData.queries[el]} color={el%2===0? false: true}/>):null}

                <div className={[Style.custom_input, Style.color].join(" ")}>
                  <div className={Style.title}>{quoteData.calculatedField[0].title}</div>
                  <img src={infos} alt="info" />
                  <div className={Style.fixer}>
                    <input 
                    className={[Style.quote]}
                    disabled={true}
                    value={notaryFees} // notary fees calculation
                    onChange={()=>handleQuote({"notaryFees":notaryFees})}
                    />€
                  </div>
                </div>

                <div className={Style.custom_input}>
                  <div className={Style.title}>{quoteData.calculatedField[1].title}</div>
                  <img src={infos} alt="info" />
                  <div className={Style.fixer}>
                    <input 
                    className={[Style.quote]}
                    disabled={true}
                    value={globalFee} // total cost calculation
                    onChange={()=>handleQuote({"totalCost": globalFee})}
                    />€
                  </div>
                </div>

              </div> 
            </div>
        )     
}

export default Quote;