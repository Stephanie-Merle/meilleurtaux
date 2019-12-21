import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Style from './LastScreen.module.css';
import Axios from 'axios';
import Cookies from "js-cookie";
import Spinner from '../components/backOffice/Spinner';

const LastScreen = ({resetData, handlePage})=> {

const [ref, setRef] = useState("") // to display the refNumber after we get it
const [isLoading, setIsLoading] = useState(true) 
const [isSent, setIsSent] = useState(false) 


useEffect(() => { // useEffect only called once
  const sendingData = async() => {
    try{
      const data = Cookies.get("FormData"); // getting all stored informations
      if(data){
        if(ref){
          setIsLoading(false);
          return setIsSent(true);
        }else{
          const res = await Axios.post("https://best-rates.herokuapp.com/application/create", JSON.parse(data)); //send application to DB
          setRef(res.data.refNumber) // store refNumber to display it
          await resetData(); 
          return setIsLoading(false); 
        }  
      }
    }catch(e){
      console.log(e.message)
      setIsLoading(false)
    }
  }
  sendingData()
  handlePage()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

        return(
            <div className="layout">
              {isLoading? 
              <div className={Style.spinner}>  <Spinner/> </div>: 
              isSent? <Title title="Votre dossier à déjà été envoyé!" hide={true}/> :
              ref? 
              <>
                <Title title="Et voilà, le formulaire est terminé!" hide={true}/>
              <p>Votre numéro de dossier est le: {ref}</p>
              <p>Mentions légales</p>
              </>
              :<p>Une erreur est survenue</p>}
            </div>
        )     
}

export default LastScreen;