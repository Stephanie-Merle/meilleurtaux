import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Style from './LastScreen.module.css';
import Axios from 'axios';
import Cookies from "js-cookie";

const LastScreen = ({resetData})=> {

const [ref, setRef] = useState("") // to display the refNumber after we get it
const [isError, setError] = useState(false) // to display error message if needed
const [isLoading, setIsLoading] = useState(true) 

const sendingData = async() => {
  try{
    const data = Cookies.get("FormData"); // getting all stored informations
    if(data){
      const res = await Axios.post("https://best-rates.herokuapp.com/application/create", JSON.parse(data)); //send application to DB
      setIsLoading(false)
      // Cookies.remove("FormData") // removing cookie already in reducer
      setRef(res.data.refNumber) // store refNumber to display it
      return resetData();
    }else{
      return console.log("Please fill the form first")
    }
  }catch(e){
    console.log(e.message)
    setIsLoading(false)
    setError(true)
  }
}
useEffect(() => { // useEffect only called once
  sendingData()
}, [])


        return(
            <div className={Style.screen}>
              {isLoading? <p>Please wait</p>: 
              isError? <p>Erreur</p>:
              <>
                <Title title="Et voilà, le formulaire est terminé!" hide={true}/>
              <p>Votre numéro de dossier est le: {ref}</p>
              <p>Mentions légales</p>
              </>
              }
              
            </div>
        )     
}

export default LastScreen;