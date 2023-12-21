import style from "./Manager.module.css";
import image from "./illustration-hero.svg";

function Manager() {
    return (
        <div className={style.container}>
            <div className={style.container__description}>
                <div className={style.container__description__title}>A Simple Bookmark Manager</div>
                <div className={style.container__description__main}>A clean and simple interface to organize your
                    favorite websites. Open a new browser tab and see your sites load instantly. Try it to free.</div>
                <div className={style.container__description__button}>
                    <button className={`${style.container__description__button__first} ${style.container__description__button__item}`}>Get it on Chrome</button>
                    <button className={`${style.container__description__button__second} ${style.container__description__button__item}`}>Get it on Firefox</button>
                </div>
            </div>
            <div className={style.container__grafic}>
                <div className={style.container__grafic__item}></div>
                <img src={image} alt="Content" className={style.container__grafic__image}/>
            </div>
        </div>
    );
}

export default Manager;