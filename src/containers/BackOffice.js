import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Style from './BackOffice.module.css';
import Cards from '../components/backOffice/Cards';
import Spinner from '../components/backOffice/Spinner';
import Axios from 'axios';


const BackOffice = ()=> {

    const [data, setData] = useState();
    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState();

const fetchingData = async()=>{
  if(password){
    try{
      setIsLoading(true);
      const res = await Axios.post("https://best-rates.herokuapp.com/application/", {password: password});
      setWaiting(false);
      setIsLoading(false);
      console.log(res.data)
      return setData(res.data);
    }catch(e){
      console.log(e.message);
      setIsLoading(false);
    }
  }
}
useEffect(() => {

}, [data])
        return(
            <div className={Style.backOffice}>
              <Title title="Back Office" hide={true}/>
              {waiting? (
                <div className={Style.row}>
              <input 
                    className={Style.select}
                    type="password"
                    placeholder="ENTER YOUR PASSWORD"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            <button className={Style.btn} onClick={()=>fetchingData()}>GO</button>
             
              </div>
              ):
              isLoading? <Spinner />: 
              <div className={Style.cardsContainer}>
              {data? data.applications.map(el=> <Cards 
              refNumber={el.refNumber} 
              propertyType={el.propertyType} 
              propertyState={el.propertyState}
              totalCost={el.totalCost} 
              emailAddress={el.emailAddress} 
              />) : null}
              </div>
              }
             
              
            </div>
        )     
}

export default BackOffice;