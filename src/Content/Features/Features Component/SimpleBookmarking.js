import style from "../Features.module.css";
import image from "./image/illustration-features-tab-1.svg";

function FeaturesComponents1(useActive) {
    return (
        <div className={style.container__modal__main} style={{display: useActive.state? 'flex' : 'none'}}>
            <div className={style.container__grafic}>
                <img src={image} alt="Image" className={style.container__grafic__tab__img}/>
                <div className={style.container__grafic__item}></div>
            </div>
            <div className={style.container__modal__description}>
                <div className={style.container__module__title}>Bookmark in one click</div>
                <div className={style.container__module__description}>Organize your bookmarks however you like.
                    Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</div>
                <div className={style.container__description__button}>
                    <button className={style.container__description__button__item}>More info</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturesComponents1;