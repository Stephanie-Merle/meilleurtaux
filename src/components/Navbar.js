import React from 'react';
import { Link } from "react-router-dom";
import Style from './Navbar.module.css'


const Navbar = (props) => {
 return(
   <>
   <div className={Style.navbar}>
     <Link to={props.prev} className={Style.underline}>Précédent</Link>
     <div className={Style.progressBar}> 
       <div style={{position: "absolute", left: `${Math.round((props.page/7)*400)}px`, top: "-20px"}}>
        <div className={Style.percentage}>{Math.round((props.page/7)*100)}%</div>
       </div>
     </div>
     <Link to={props.next} className={Style.btn}>Suivant</Link>
   </div>
   <div className={Style.nb}>* Champ obligatoire - <span className={Style.underline}>Mentions Légales</span></div>
   </>
 )
}

export default Navbar;
