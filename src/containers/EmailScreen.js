import React from 'react';
import Title from '../components/Title';
import cover from '../assets/visuel-desktop-email.jpg';
import Style from './EmailScreen.module.css';
import infos from '../assets/infos.png';

const EmailScreen = ({handleQuote, data})=> {

        return(
            <div className="layout">
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
                    onChange={(e)=>handleQuote({emailAddress: e.target.value})}
                    />
                  </div>
                </div>
                <div className={Style.row}>
                <input 
                  type="checkbox"
                  checked={data.isChecked}
                  onChange={()=>handleQuote({isChecked: !data.isChecked})}
                  />
                  <div onClick={()=>handleQuote({isChecked: !data.isChecked})}>J'accepte de recevoir par email des propositions de MeilleurTaux.com</div>
                </div>
              </div>
            </div>
        )     
}

export default EmailScreen;