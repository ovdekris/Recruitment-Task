import style from "./Features.module.css";
import {useState,useEffect} from "react";
import SimpleBookmarking from "./Features Component/SimpleBookmarking";
import SpeedySearching from "./Features Component/SpeedySearching";
import EasySharing from "./Features Component/EasySharing";
function Features() {
    const [useActive,setUseActive]=useState(true);
    const [useActive2,setUseActive2]=useState(false);
    const [useActive3,setUseActive3]=useState(false);
    useEffect(() => {
        const timerId1 = setTimeout(() => {
            setUseActive(false)
            setUseActive(false);
            setUseActive2(true);
        }, 30000);
        return () => clearTimeout(timerId1);
    }, []);
    useEffect(() => {
        const timerId2 = setTimeout(() => {
            setUseActive(false)
            setUseActive2(false);
            setUseActive3(true);
        }, 35000);
        return () => clearTimeout(timerId2);
    }, [useActive2]);
    return (
        <div className={style.container}>
            <div className={style.container__description}>
                <div className={style.container__description__title__item}>Features</div>
                <div className={style.container__description__main}>Our aim is to make it quick and easy
                for you to access your favourite websites. Your bookmakers sync between your devices so you can access
                them on the go.</div>
            </div>
            <div className={style.container__modal__title}>
                <div onClick={()=>{
                    setUseActive(true)
                    setUseActive2(false)
                    setUseActive3(false)
                }} className={style.container__modal__title__item}>Simple Bookmarking</div>
                <div className={style.container__modal__title__item}
                     onClick={()=>{
                    setUseActive(false)
                    setUseActive2(true)
                    setUseActive3(false)
                }}>Speedy Searching</div>
                <div className={style.container__modal__title__item}
                    onClick={()=>{
                        setUseActive(false)
                        setUseActive2(false)
                        setUseActive3(true)
                    }}>Easy Sharing</div>
            </div>
            <SimpleBookmarking state={useActive}/>
            <SpeedySearching state={useActive2}/>
            <EasySharing state={useActive3}/>
        </div>
    );
}

export default Features;