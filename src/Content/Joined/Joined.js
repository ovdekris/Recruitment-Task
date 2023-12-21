import style from "./Joined.module.css";
import CountDownAnimation from "./JoinedAnimation";
import {useState,useEffect} from "react";
import iconError from "./icon-error.svg";

function Joined() {
    const [email,setEmail]=useState('');
    const [isValidEmail,setIsValidEmail]=useState(true);
    const [showComponent,setShowComponent]=useState(true);
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handleButtonClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowComponent(false);
        }, 20000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={style.container}>
            <div className={style.content}>
            <div className={style.title}>
                <div className={style.title__quantity}>
                    {showComponent?
                    <CountDownAnimation/>: 0}
                    +</div>
                 <div className={style.title__item}>A L R E A D Y <div className={style.title__item__grafic}> </div> J O I N E D </div></div>
            <div className={style.description}>Stay up-to-date with what we're doing</div>
            <div className={style.input__item}>
                <input type="text" placeholder="Enter your email address" value={email} onChange={handleEmailChange}
                       style={{border: isValidEmail? 'none' : '1px solid red'}}
                />
                {isValidEmail?'':<img src={iconError} alt="iconError" className={style.input__error}/>}
                <button onClick={handleButtonClick}>Contact Us</button>
            </div>
                {isValidEmail?
                 '':<div className={style.input__item__error}>Whoops, make sure it's an email</div>}
            </div>
        </div>
    );
}

export default Joined;