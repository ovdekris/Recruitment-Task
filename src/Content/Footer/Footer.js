import style from "./Footer.module.css";
import Logo from "../Header/Logo/Logo";
import logoTwitter from "./icon-twitter.svg";
import logoTwitterActive from "./icons8-twitter-active.png";
import logoFacebook from "./icons8-facebook-active.png";
import logoFacebookActive from "./icon-facebook.svg";

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.content}>
                <div className={style.content__menu}>
                    <div className={style.content__menu__logo}>
                        <Logo/>
                         <div className={style.content__menu__logo__title}>BOOKMARK</div>
                    </div>
                    <nav>
                        <ul className={style.container__list}>
                            <li>FEATURES</li>
                            <li>PRICING</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                </div>
                <div className={style.content__social__media__item}>
                <div className={style.content__social__media}>
                    <img src={logoTwitterActive} alt=""/>
                    <img src={logoTwitter}/>
                </div>
                <div className={style.content__social__media}>
                    <img src={logoFacebook} alt=""/>
                    <img src={logoFacebookActive}/>

                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;