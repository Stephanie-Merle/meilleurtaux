import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import Style from './Header.module.css';

const Header = () => {
 return(
     <div className={Style.header}>
     <Link to="/PropertyType"><img src={logo} alt="Logo" /></Link>
     <div className={Style.row}>
        <div className={Style.header_subtitle}>Crédit immobilier : 5 mn pour obtenir le meilleur taux</div>
        <Link to="/BackOffice" className={Style.btn}>Back Office</Link>
     </div>
   </div>
 )
}

export default Header;
