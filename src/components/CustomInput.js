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
    const [showModal, setShowModal] = useState(false);
    const [clicked, setClicked] = useState(true);
    

    const fetchingData = async() => {
        if(selected === "FRANCE" && zip){
            if(zip.length > 2){ // case of an number input with minimum 3 numbers
                try{
                    const res = await Axios.get(`https://vicopo.selfbuild.fr/cherche/${zip}`);
                    setShowModal(true)
                    return await setCities(res.data.cities);
                  }catch(e){
                    setShowModal(false)
                    return alert(e.message);
                  }
            }else if(zip.length < 3){
                setShowModal(false)
            }
        }
    }
    useEffect(() => {
            setClicked(false);
    }, [])
  useEffect(() => {
      if(selected==="FRANCE" && !clicked){
        fetchingData();
      }else if(clicked){
          setClicked(false);
      }else{
          console.log("please select FRANCE")
      }
  }, [zip])
 

const handleSelection =(el)=> {
        setShowModal(false);
        setClicked(true);
        props.handleLocation({...el, country: selected});
        setZip(`${el.city} (${el.code})`);
        setCities("");
    
    
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
                autoComplete="off"
                value={zip}
                onChange={(e)=>setZip(e.target.value)}
                />
                <div className={showModal? Style.modal : Style.none}><ul>{cities? cities.map((el, i) => <li key={i} className={Style.list} onClick={()=>handleSelection(el)} >{el.city} ({el.code})</li>) :null }</ul></div>
            </div>
        </div>
        )
     }
    
   return ({display})
}
export default CustomInput;