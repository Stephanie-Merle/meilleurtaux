import React from 'react';
import Title from '../components/Title';
import Style from './PropertyLocation.module.css';
import CustomInput from '../components/CustomInput';
import location from '../assets/location.json';

const PropertyLocation = ({handleLocation, zip})=> {

      const n = Object.keys(location.queries)

        return(
            <div className={Style.PropertyLocation}>
              <Title title={location.title} hide={true}/>
              <div className={Style.container}>
                {n? n.map(el =>  <CustomInput handleLocation={handleLocation} zip={zip} key={el} {...location.queries[el]} color={el%2===0? true: false}/>):null}
                <div className={Style.information}>
                  <p>{location.information} </p>
                  <p>{location.info}</p>
                   </div>
              </div>
            </div>
        )     
}

export default PropertyLocation;