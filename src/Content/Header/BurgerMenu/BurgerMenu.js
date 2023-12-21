import  "./BurgerMenu.Module.css";
import React from "react";
import iconClose from "../icon-close.svg";
import Logo from "../Logo/Logo";
import logoFacebook from "../../Footer/icon-facebook.svg";
import logoTwitter from "../../Footer/icon-twitter.svg";

function BurgerMenu({active, setActive}){
    return(
         <div className={active? 'container active' :'container'}>
             <div className="blur">
                 <div className="container__menu">
                        <div className="container__menu__header">
                            <div className="container__menu__header__logo">
                                <Logo/>
                                <div className="content__menu__title">BOOKMARK</div>
                            </div>
                        <img src={iconClose} alt="iconClose" onClick={()=>{setActive(!active)}}/>
                        </div>
                         <div className="content__menu__list">
                             <ul className="content__menu__list__ul">
                                 <div className="content__menu__grafic"></div>
                                 <li>FEATURES</li>
                                 <div className="content__menu__grafic"></div>
                                 <li>PRICING</li>
                                 <div className="content__menu__grafic"></div>
                                 <li>CONTACT</li>
                                 <div className="content__menu__grafic"></div>
                             </ul>
                             <div className="container__list__button__login">LOGIN</div>
                             <div className="content__social__media">
                                 <img src={logoFacebook} alt="logoFacebook"/>
                                 <img src={logoTwitter} alt="logoTwiter"/>
                             </div>
                         </div>
                     </div>
             </div>
         </div>
    )
}
export default BurgerMenu;