import React from 'react';
import Title from '../components/Title';
import Style from './PropertyLocation.module.css';
import infos from '../assets/infos.png'

// TODO Create question card with different input fields

const PropertyLocation = ()=> {
    const location = {
        title: "OÙ SE SITUE LE BIEN À FINANCER ?",
        query:[
          {title: "Dans quel pays se situe votre projet ?*",
          answer: null},
          {title: "Ville ou code postal*",
          answer: null}
        ]}
        return(
            <div className={Style.PropertyLocation}>
              <Title title={location.title} hide={true}/>
              <div>
                {location.query[0].title}
                <img src={infos} alt="info" />

              </div>
            </div>
        )
        
}

export default PropertyLocation;