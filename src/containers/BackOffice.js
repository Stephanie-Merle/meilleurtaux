import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Style from './BackOffice.module.css';
import Cards from '../components/backOffice/Cards';
import Spinner from '../components/backOffice/Spinner';
import ErrorMsg from '../components/ErrorMsg';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

import Axios from 'axios';

const BackOffice = ()=> {

    const [data, setData] = useState();
    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState();
    const [isError, setIsError] = useState(false);

const fetchingData = async()=>{
  if(password){
    try{
      setIsLoading(true);
      setWaiting(false);
      const HASH = Base64.stringify(sha256(password)); // sending hashed password to backend for check
      const res = await Axios.post("https://best-rates.herokuapp.com/application/", {password: HASH});
      if(res.data.applications){
        setData(res.data);
        setIsLoading(false);
      }else{
        setIsLoading(false);
        setIsError(true);
        setWaiting(true);
      }
    }catch(e){
      console.log(e.message);
    }
  }
}

const removeApplication = async(id)=>{
    try{
      let url = `https://best-rates.herokuapp.com/application/${id}/remove`
      const res = await Axios.post(url);
      console.log(res.message)
      return fetchingData()
    }catch(e){
      console.log(e.message);
    }
}


        return(
            <div className={Style.backOffice}>
              <Title title="Back Office" hide={true}/>
              {waiting? (
                <div className={Style.row}>
                  <div>
              <input 
                    className={Style.select}
                    type="password"
                    placeholder="ENTER YOUR PASSWORD"
                    onChange={(e)=>setPassword(e.target.value)}
                    required={isError}
                    />
                    <ErrorMsg error={isError} text="Mot de passe incorrect" />
                    </div>
            <button className={Style.btn} onClick={()=>fetchingData()}>GO</button>
             
              </div>
              ):
              isLoading? <div className={Style.spinner}><Spinner /></div>: 
              <div className={Style.cardsContainer}>
              {data? data.applications.map(el=> <Cards 
              key={el.ref}
              id={el._id}
              refNumber={el.refNumber} 
              removeApplication={removeApplication}
              zip={el.zip}
              country={el.country}
              propertyType={el.propertyType} 
              propertyState={el.propertyState}
              totalCost={el.totalCost} 
              emailAddress={el.emailAddress} 
              propertyUsage={el.propertyUsage}
              landCost={el.landCost}
              estimatedPrice={el.estimatedPrice}
              renovationCost={el.renovationCost}
              />) : null}
              </div>
              }
            </div>
        )     
}

export default BackOffice;

