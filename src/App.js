import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Cookies from "js-cookie";
import Layout from './components/Layout';
import PropertyType from './containers/PropertyType'
import "./reset.css";
import './App.css';

const state = [
  {title: "type de bien",
  cards: ["maison", "appartement", "terrain + construction", "terrain seul", "autres"]}
]

const App = () => {
 return(
   <Layout>
     <PropertyType data={state[0]} />
   </Layout>
 )
}

export default App;
