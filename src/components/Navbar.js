import React from 'react';
import { Link } from "react-router-dom";
import Style from './Navbar.module.css'

const Navbar = ({prev, page, next, handleError}) => {
 return(
   <>
   <div className={Style.navbar}>
     {page >0? <Link to={prev} className={Style.underline}>Précédent</Link> : <div className={Style.underline}/>}
     <div className={Style.progressBar}> 
       <div style={{position: "absolute", left: `${Math.round((page/7)*400)}px`, top: "-20px"}}>
        <div className={Style.percentage}>{Math.round((page/7)*100)}%</div>
       </div>
     </div>
     <Link to={next} onClick={handleError} className={Style.btn}>{page===6?"Valider":"Suivant"}</Link>
   </div>
   <div className={Style.nb}>* Champ obligatoire - <span className={Style.underline}>Mentions Légales</span></div>
   </>
 )
}

export default Navbar;
