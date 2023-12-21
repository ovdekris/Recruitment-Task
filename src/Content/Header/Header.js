import {useState} from "react";
import style from "./Header.module.css";
import Logo from "./Logo/Logo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import iconHamburger from "./icon-hamburger.svg";

function Header() {
    const[menuActive, setMenuActive]=useState(false);
    return (
        <menu className={style.container}>
            <Logo/>
            <div className={style.burger_container}>
                <div className={style.burger}>
                    <img src={iconHamburger} alt="iconHumburger" onClick={()=>{setMenuActive(!menuActive)}}/>
                    <span></span>
                </div>
                <BurgerMenu active={menuActive} setActive={setMenuActive}/>
            </div>
            <nav>
                <ul className={style.container__list}>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                    <div className={style.container__list__button__login}>LOGIN</div>
                </ul>
            </nav>
        </menu>
    );
}

export default Header;