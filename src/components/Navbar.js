import React from 'react';
import { Link } from "react-router-dom";
import Style from './Navbar.module.css'


const Navbar = (props) => {
 return(
   <>
   <div className={Style.navbar}>
     <Link to={props.prev} className={Style.underline}>Précédent</Link>
     <Link to={props.next} className={Style.btn}>Suivant</Link>
   </div>
   <div className={Style.nb}>* Champ obligatoire - <span className={Style.underline}>Mentions Légales</span></div>
   </>
 )
}

export default Navbar;
