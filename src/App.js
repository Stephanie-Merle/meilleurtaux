import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Cookies from "js-cookie";
import Layout from './components/Layout';
import CardsContainer from './components/CardsContainer';
import Navbar from './components/Navbar';
import state from './assets/menu.json'
import "./reset.css";
import './App.css';

const App = () => {

  const initState = {
    propertyType: null,
    propertyState: null,
    propertyUsage: null,
    currentSituation: null,
    propertyLocation: {
      country: null,
      zip: null
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
  
  const [data, setData] = useState(initState);
  console.log(data)
 return(
   <Layout>
     <Router>
      <Switch>

           <Route path={state[3].link}>
            <CardsContainer data={state[3]} choice={data.propertyType} link={state[3].link}/>
            <Navbar prev={state[2].link} next={state[3].link}/>
          </Route>
      
          <Route path={state[2].link}>
            <CardsContainer data={state[2]} setData={(el)=> setData({...data, propertyUsage: el })} choice={data.propertyUsage} link={state[3].link}/>
            <Navbar prev={state[1].link} next={data.propertyUsage? state[3].link : state[2].link}/>
          </Route>

          <Route path={state[1].link}>
            <CardsContainer data={state[1]} setData={(el)=> setData({...data, propertyState: el })} choice={data.propertyState} link={state[2].link}/>
            <Navbar prev={state[0].link} next={data.propertyState? state[2].link: state[1].link}/>
          </Route>
       
          <Route path={state[0].link}>
            <CardsContainer data={state[0]} setData={(el)=> setData({...data, propertyType: el })} choice={data.propertyType} link={state[1].link}/>
            <Navbar prev={state[0].link} next={data.propertyType? state[1].link : state[0].link}/>
          </Route>

      </Switch>
     </Router>
     
   </Layout>
 )
}

export default App;
