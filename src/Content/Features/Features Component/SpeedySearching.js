import style from "../Features.module.css";
import image from "./image/illustration-features-tab-2.svg";

function FeaturesComponents1(useActive) {
    return (
        <div className={style.container__modal__main} style={{display: useActive.state? 'flex' : 'none'}}>
            <div className={style.container__grafic__tab}>
                <img src={image} alt="Image" className={style.container__grafic__tab__img__second}/>
                <div className={style.container__grafic__item}></div>
            </div>
            <div className={style.container__modal__description}>
                <div className={style.container__module__title}>Intalligent search</div>
                <div className={style.container__module__description}>Our powerful search feature will
                help you find saved sites in on time at all. No need to trawl through all of your bookmarks.</div>
                <div className={style.container__description__button}>
                    <button className={style.container__description__button__item}>More info</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturesComponents1;