import React from 'react';
import Title from '../components/Title';
import Style from './LastScreen.module.css'

const lastScreen = ()=> {


        return(
            <div className={Style.screen}>
              <Title title="Et voilà, le formulaire est terminé!" hide={true}/>
              <p>Votre numéro de dossier est le:</p>
              <p>Mentions légales</p>
            </div>
        )     
}

export default lastScreen;