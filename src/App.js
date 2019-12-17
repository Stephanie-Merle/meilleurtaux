import React, {useReducer, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from './components/Layout';
import CardsContainer from './components/CardsContainer';
import Navbar from './components/Navbar';
import state from './assets/menu.json'; // my data for the card menu
import PropertyLocation from './containers/PropertyLocation';
import Quote from './containers/Quote';
import "./reset.css";
import './App.css';

// initState in case we don't have a session already
let initState = {
  propertyType: null,
  propertyState: null,
  propertyUsage: null,
  currentSituation: null,
  propertyLocation: {
    country: null,
    zip: ""
  },
  quote: {
    estimatedPrice: null,
    renovationCost: null,
    notaryFees: null,
    totalCost: null
  },
  emailAddress: null,
  checkBox: false
}

const App = () => {

if(Cookies.get("FormData")){
  initState = JSON.parse(Cookies.get("FormData")); // getting information if existing session
}else{
  Cookies.set("FormData", JSON.stringify({...initState})); // if not, initiating a new session
}

  function reducer(data, action) {
    switch (action.type) {
      case "SET_DATA": { // equivalent of setState({...data, ...newData})
      Cookies.set("FormData", JSON.stringify({...data, ...action.newData}));
        return {
          ...data,
          ...action.newData
        };
      }
      default:
        return data;
    }
  }
 
const [data, dispatch] = useReducer(reducer, initState);
const [location, setLocation] = useState("/propertyLocation");

const handleLocation = (el)=> {
  dispatch({type: "SET_DATA", newData: {propertyLocation: { country: el.country, zip: `${el.city} (${el.code})` }} });
  setLocation("/Quote");
}

let display= []; //storing all routes of the card menu with the dispatch function
state.map((elem, i) => 
  display.push(
   <Route path={state[i].link} key={i}>
       <CardsContainer data={elem} setData={(el)=> dispatch({
           type: "SET_DATA",
           newData: {[elem.screen]: el}
         })} choice={data[elem.screen]} link={data[elem.screen] && i<3? state[i+1].link : data[elem.screen]? "/propertyLocation" :  state[i].link}/>
       <Navbar prev={i>0 ? state[(i-1)].link : state[i].link} page={i} next={data[elem.screen] && i<3 ? state[i+1].link : data[elem.screen]? "/propertyLocation" :  state[i].link} />
     </Route> 
  )) 
  
 return(
   <Layout>
     <Router>
      <Switch>
      <Route path="/Quote">
        <Quote />
       <Navbar prev="/propertyLocation" page={5} next="/Quote"/>
     </Route> 
      <Route path="/propertyLocation">
        <PropertyLocation handleLocation={handleLocation} zip={data.propertyLocation.zip} />
       <Navbar prev={state[3].link} page={4} next={location} />
     </Route>
        {display.reverse()}
      </Switch>
     </Router> 
   </Layout>
 )
}

export default App;
