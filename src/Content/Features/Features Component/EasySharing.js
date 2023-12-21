import style from "../Features.module.css";
import image from "./image/illustration-features-tab-3.svg";

function FeaturesComponents1(useActive) {
    return (
        <div className={style.container__modal__main} style={{display: useActive.state? 'flex' : 'none'}}>
            <div className={style.container__grafic__tab3}>
                <img src={image} alt="Image" className={style.container__grafic__tab__img__second}/>
                <div className={style.container__grafic__item}></div>
            </div>
            <div className={style.container__modal__description}>
                <div className={style.container__module__title}>Share your bookmarks</div>
                <div className={style.container__module__description}>Easily share your bookmarks and collection with others.
                Create a shareable link that you can send at the click button.</div>
                <div className={style.container__description__button}>
                    <button className={style.container__description__button__item}>More info</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturesComponents1;