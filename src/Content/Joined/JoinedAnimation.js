import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import style from "./JoinedAnimation.module.css";
const JoinedAnimation  = () => {
    const { number } = useSpring({
        from: { number: 35000 },
        to: async (next) => {
            await next({ number: 0 });
        },
        config: { duration: 20000 },
    });

    useEffect(() => {
        number.start();
    }, [number]);

    return (
        <div className={style.container}>
            <animated.span className={style.content}>{number.interpolate((val) => Math.floor(val))}</animated.span>
        </div>
    );
};

export default JoinedAnimation ;
