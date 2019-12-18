import React, {useState} from 'react';
import Title from '../components/Title';
import cover from '../assets/visuel-desktop-email.jpg';
import Style from './EmailScreen.module.css';
import infos from '../assets/infos.png';

const EmailScreen = ({data})=> {

const [isCheck, setCheck] = useState(false);
//TODO remonter props to level up
const [email, setEmail] = useState("");

        return(
            <div className={Style.EmailScreen}>
              <Title title="vos coordonées" hide={true}/>
              <div className={Style.container}>
                  <div className={Style.row}>
                      <div className={Style.coverMessage}>
                      <div className={Style.message}>Un devis vous sera envoyé par mail avec un récapitulatif de votre demande.</div>
                      </div>
               <img src={cover} alt="cover" />
                  </div>
              
                  <div className={Style.custom_input}>
                  <div className={Style.title}>Adresse e-mail emprunteur *</div>
                  <img src={infos} alt="info" />
                  <div className={Style.fixer}>
                    <input 
                    className={Style.select}
                    type="email"
                    value={data.emailAddress}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={Style.row}>
                <input 
                  type="checkbox"
                  onChange={()=>setCheck(isCheck => !isCheck)}
                  />
                  <p>J'accepte de recevoir par email des propositions de MeilleurTaux.com</p>
                </div>
              </div>
            </div>
        )     
}

export default EmailScreen;