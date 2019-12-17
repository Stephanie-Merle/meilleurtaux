import React, {useState, useEffect} from 'react';
import infos from '../assets/infos.png';
import Style from './CustomInput.module.css';
import Axios from 'axios';

// TODO if selected country !== FRANCE 
// TODO No information or nothing found >> Nous n'avons pas trouvé votre (orange) || Saisie obligatoire (red)

const CustomInput = (props)=> {
    const [zip, setZip] = useState(props.zip);
    const [cities, setCities] = useState();
    const [selected, setSelect] = useState("FRANCE");

    const fetchingData = async() => {
        if(selected === "FRANCE" && zip){
            if(zip.length > 2 && !isNaN(zip)){ // case of an number input with minimum 3 numbers
                try{
                    const res = await Axios.get(`https://vicopo.selfbuild.fr/cherche/${zip}`);
                    return await setCities(res.data.cities);
                  }catch(e){
                    return alert(e.message);
                  }
            } 
            if(zip.length > 2 && isNaN(zip)){ // case of an text input with minimum 3 letters
                try{
                    const res = await Axios.get(`https://vicopo.selfbuild.fr/ville/${zip}?format=callback`);
                    return await setCities(res.data.cities);
                  }catch(e){
                    return alert(e.message);
                  }
            }
        }
    }
    
  useEffect(() => {
        fetchingData();
  }, [zip])
 

const handleSelection =(el)=> {
    if(selected==="FRANCE"){
        props.handleLocation({...el, country: selected});
        setZip(`${el.city} (${el.code})`);
        setCities("");
    }
    
}
let display = null;

    if(props.type === "select"){
        return display = (
        <div className={props.color? [Style.custom_input, Style.color].join(" "): Style.custom_input}>
            <div className={Style.title}>{props.title}</div>
                <img src={infos} alt="info" />
                <select id="pays" className={Style.select} onChange={(e)=> setSelect(e.target.value)} >
                            <option value="FRANCE">FRANCE</option>
                            <option value="BELGIQUE">BELGIQUE</option>
                            <option value="LUXEMBOURG">LUXEMBOURG</option>
                            <option value="SUISSE">SUISSE</option>
                            <option value="ITALIE">ITALIE</option>
                        </select>
                        </div>
                        )
            }
    if(props.type === "zip"){
        return display = (
        <div className={props.color? [Style.custom_input, Style.color].join(" "): Style.custom_input}>
            <div className={Style.title}>{props.title}</div>
            <img src={infos} alt="info" />
            <div className={Style.fixer}>
                <input 
                className={[Style.select, Style.border].join(" ")}
                name="zipCode"
                value={zip}
                onChange={(e)=>setZip(e.target.value)}
                />
                <div className={cities? cities.length > 2? Style.modal : Style.none : Style.none}><ul>{cities? cities.map((el, i) => <li key={i} className={Style.list} onClick={()=>handleSelection(el)} >{el.city} ({el.code})</li>) :null }</ul></div>
            </div>
        </div>
        )
     }
    
   return ({display})
}
export default CustomInput;