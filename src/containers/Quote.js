import React, {useEffect} from 'react';
import Title from '../components/Title';
import Style from './Quote.module.css';
import QuoteInput from '../components/QuoteInput';
import quoteData from '../assets/quoteData.json';
import infos from '../assets/infos.png';


const Quote = ({handleQuote, handlePage, data, error})=> {

  useEffect(() => {
    handlePage()
  }, [])
      const n = Object.keys(quoteData.queries)

      let notaryFees = "";
      if(data.landCost && data.estimatedPrice){
        if(data.propertyState === "Ancien"){
          notaryFees = ((Number(data.landCost)+Number(data.estimatedPrice))*7.38/100).toFixed(0);
        }else if(data.propertyState === "Neuf"){
          notaryFees = ((Number(data.landCost)+Number(data.estimatedPrice))*1.8/100).toFixed(0);
        }
      }
      let globalFee = ""
      if(data.estimatedPrice){
        globalFee = Number(data.landCost)+Number(data.estimatedPrice)+Number(notaryFees);
        if(data.renovationCost){
          globalFee += Number(data.renovationCost);
        }
      }
      

        return(
            <div className="layout">
              <Title title={quoteData.title} hide={true}/>
              <div className={Style.container}>
                {n? n.map((el, i) =>  <QuoteInput error={error} i={i} data={data} handleQuote={(el)=> handleQuote({...el, "notaryFees":notaryFees, "totalCost": globalFee})} key={el} {...quoteData.queries[el]} color={el%2===0? false: true}/>):null}

                <div className={[Style.custom_input, Style.color].join(" ")}>
                  <div className={Style.title}>{quoteData.calculatedField[0].title}</div>
                  <img src={infos} alt="info" />
                  <div className={Style.fixer}>
                    <input 
                    className={[Style.quote]}
                    disabled={true}
                    value={notaryFees} // notary fees calculation
                    onChange={()=>handleQuote({"notaryFees":notaryFees})}
                    /><span>€</span>
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
                    /><span>€</span>
                  </div>
                </div>

              </div> 
            </div>
        )     
}

export default Quote;