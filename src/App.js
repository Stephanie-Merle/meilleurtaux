import React, {useReducer, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie"; 
import Layout from './components/Layout'; // including header
import CardsContainer from './components/CardsContainer'; // component to generate 1st, 2nd and 3rd Screens
import Navbar from './components/Navbar';
import state from './assets/menu.json'; // data import for the card menu
import PropertyLocation from './containers/PropertyLocation'; //4th Screen
import Quote from './containers/Quote'; //5th Screen
import EmailScreen from './containers/EmailScreen'; // 6th Screen
import LastScreen from './containers/LastScreen'; // 7th Screen
import BackOffice from './containers/BackOffice';
import "./reset.css";
import './App.css';

// initState in case we don't have a session already
let initState = {
  propertyType: "",
  propertyState: "",
  propertyUsage: "",
  currentSituation: "",
  country: "",
  zip: "",
  landCost: "",
  estimatedPrice: "",
  renovationCost: "",
  notaryFees: "",
  totalCost: "",
  emailAddress: "",
  isChecked: false
}

function reducer(data, action) { //using reducer to update simultaneously state and cookie
  switch (action.type) {
    case "SET_DATA": { // equivalent of setState({...data, ...newData})
    Cookies.set("FormData", JSON.stringify({...data, ...action.newData}), { expires: 2 }); 
    // with exp. date to not loose data on session closed
      return {
        ...data,
        ...action.newData
      };
    }
    case "RESET_DATA": { //removing cookie when information is stored and email sent
    Cookies.remove("FormData");
      return {initState};
    }
    default:
      return data;
  }
}

const App = () => {

if(Cookies.get("FormData")){
  initState = JSON.parse(Cookies.get("FormData")); // getting information if existing session
}else{
  Cookies.set("FormData", JSON.stringify({...initState}),{ expires: 2 }); // if not, initiate new session
}
 
const [data, dispatch] = useReducer(reducer, initState);       

const handleLocation = (el)=> {
  dispatch({type: "SET_DATA", newData: {country: el.country, zip: `${el.city} (${el.code})`  }}); 
}
const handleQuote = (el)=> {
  dispatch({type: "SET_DATA", newData: el });
}
const resetData = ()=> {
  dispatch({type: "RESET_DATA"});
}

let display= []; //storing all routes of the card menu with the dispatch function

const [errorLocation, setErrorLocation] = useState(false); // handle errors on propertyLocation page
const [errorQuote, setErrorQuote] = useState(false); // handle errors on propertyLocation page
const [errorEmail, setErrorEmail] = useState(false); // handle errors on EmailScreen 

const handleError = (page) =>{ // return errors when some required information are missing 
  if(page===4){
    if(!data.zip){
        return setErrorLocation(true);
    }
  }
  if(page===5){
    if(!data.landCost || !data.estimatedPrice){
      return setErrorQuote(true);
    }
  } 
  if(page===6){
    if(!data.emailAddress || !data.isChecked){
      return setErrorEmail(true);
    }
  } 
}

state.map((elem, i) => 
  display.push(
   <Route path={state[i].link} key={i}>
       <CardsContainer data={elem} setData={(el)=> dispatch({
           type: "SET_DATA",
           newData: {[elem.screen]: el}
        })} choice={data[elem.screen]} link={i<3?state[i+1].link : "/propertyLocation"}/>
       <Navbar 
        prev={i>0 ? state[(i-1)].link : state[i].link} 
        page={i} 
        next={data[elem.screen]? i===3? "/propertyLocation": state[i+1].link : state[i].link} />
     </Route> 
  )) 



 return(
   <Router>
   <Layout>
      <Switch>
      <Route path="/BackOffice">
        <BackOffice />
     </Route>
      <Route path="/LastScreen">
        <LastScreen resetData={resetData}/>
     </Route> 
      <Route path="/Confirmation">
        <EmailScreen handleQuote={handleQuote} error={errorEmail} data={data}/>
       <Navbar prev="/Quote" page={6} handleError={()=>handleError(6)} next={data.isChecked && data.emailAddress? "/LastScreen": "/Confirmation"} />
     </Route> 
      <Route path="/Quote">
        <Quote handleQuote={handleQuote} error={errorQuote} data={data} />
       <Navbar prev="/PropertyLocation" page={5} handleError={()=>handleError(5)} next={data.landCost && data.estimatedPrice? "/Confirmation": "/Quote"} />
     </Route> 
      <Route path="/PropertyLocation">
        <PropertyLocation handleLocation={handleLocation} error={errorLocation} zip={data.zip} />
       <Navbar prev={state[3].link} page={4} handleError={()=>handleError(4)} next={data.zip ? "/Quote": "/PropertyLocation"} />
     </Route>
        {display.reverse()}
      </Switch>
    
   </Layout>
   </Router>
 )
}

export default App;
