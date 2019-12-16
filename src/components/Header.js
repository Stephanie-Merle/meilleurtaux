import React from 'react';
import logo from '../assets/logo.jpg'
import Style from './Header.module.css'

const Header = () => {
 return(
     <div className={Style.header}>
     <img src={logo} alt="Logo" />
   <div className={Style.header_subtitle}>Crédit immobilier : 5 mn pour obtenir le meilleur taux</div>
   </div>
 )
}

export default Header;
