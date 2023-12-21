import style from "./Frequently.module.css";
import {useState} from "react";
import arrowDown from "./icon-arrow.svg";
import arrowUp from "./icons8-arrow-up-52.png";

function Frequently() {
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    const [active3,setActive3]=useState(false);
    const [active4,setActive4]=useState(false);
    return (
        <div className={style.container}>
                <div className={style.container__description__title}>Frequently Asked Questions</div>
                <div className={style.container__description__main}>Here are some of our FAQs. If you have
                any other questions you'd like answered please feel free to email us.</div>
            <div className={style.container__question}>
                <div className={style.container__question__grafic}></div>
                <div className={style.container__question__title__item} onClick={()=>{
                    setActive1(s=>!s);
                }}>
                <div className={style.container__question__title}>What is Bookmark?</div>
                    <img src={active1? arrowUp: arrowDown} alt="arrow down"/>
                </div>
                <div className={style.answer} style={{display: active1? 'flex':'none'}}>Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book</div>
            </div>
            <div className={style.container__question}>
                <div className={style.container__question__grafic}></div>
                <div className={style.container__question__title__item} onClick={()=>{
                    setActive2(s=>!s);
                }}>
                    <div className={style.container__question__title} >How can I request a new browser?</div>
                    <img src={active2? arrowUp: arrowDown} alt="arrow down"/>
                </div>
                <div className={style.answer} style={{display: active2? 'flex':'none'}}>Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book</div>
            </div>
            <div className={style.container__question}>
                <div className={style.container__question__grafic}></div>
                <div className={style.container__question__title__item} onClick={()=>{
                    setActive3(s=>!s);
                }}>
                    <div className={style.container__question__title}>Is there a mobile app?</div>
                    <img src={active3? arrowUp: arrowDown} alt="arrow down"/>
                </div>
                <div className={style.answer} style={{display: active3? 'flex':'none'}}>Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book</div>
            </div>
            <div className={style.container__question}>
                <div className={style.container__question__grafic}></div>
                <div className={style.container__question__title__item} onClick={()=>{
                    setActive4(s=>!s);
                }}>
                    <div className={style.container__question__title}>What about other Chromium browsers?</div>
                    <img src={active4? arrowUp: arrowDown} alt="arrow down"/>
                </div>
                <div className={style.answer} style={{display: active4? 'flex':'none'}}>Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book</div>
                <div className={style.container__question__grafic}></div>
            </div>
            <button className={style.container__description__button__item}>More info</button>
        </div>
    );
}

export default Frequently;