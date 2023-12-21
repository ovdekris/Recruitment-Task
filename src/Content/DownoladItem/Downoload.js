import style from "./Downoload.module.css";
import logo_chrome from "./image/logo-chrome.svg";
import logo_firefox from "./image/logo-firefox.svg";
import logo_opera from "./image/logo-opera.svg";
import dots from "./image/bg-dots.svg";

function Downoload() {
    return (
        <div className={style.container}>
           <div className={style.container__description__title}>Downolad the Extension</div>
            <div className={style.container__description__main}>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'de like
            u s to prioritize.</div>
            <div className={style.content}>
                <div className={style.content__item}>
                    <img src={logo_chrome} alt="LogoChrome"  className={style.content__img__browser}/>
                    <div className={style.content__item__title}>Add to Chrome</div>
                    <div className={style.content__item__description}>Minium version 62</div>
                    <img src={dots} alt="dots" className={style.content__img__grafic}/>
                    <button className={style.container__description__button__item}>Add & Install Extension</button>
                </div>
                <div className={`${style.content__item} ${style.content__item__firefox}` }>
                    <img src={logo_firefox} alt="LogoFireFox" className={style.content__img__browser}/>
                    <div className={style.content__item__title}>Add to Firefox</div>
                    <div className={style.content__item__description}>Minium version 62</div>
                    <img src={dots} alt="dots" className={style.content__img__grafic}/>
                    <button className={style.container__description__button__item}>Add & Install Extension</button>
                </div>
                <div className={`${style.content__item} ${style.content__item__opera}`}>
                    <img src={logo_opera} alt="LogoOpera" className={style.content__img__browser}/>
                    <div className={style.content__item__title}>Add to Opera</div>
                    <div className={style.content__item__description}>Minium version 62</div>
                    <img src={dots} alt="dots" className={style.content__img__grafic}/>
                    <button className={style.container__description__button__item}>Add & Install Extension</button>
                </div>
            </div>
        </div>
    );
}

export default Downoload;