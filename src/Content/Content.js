import style from "./Content.module.css";
import Header from "./Header/Header";
import Manager from "./Manager/Manager";
import Features from "./Features/Features";
import Downoload from "./DownoladItem/Downoload";
import Frequently from "./Frequently/Frequently";
import Joined from "./Joined/Joined";
import Footer from "./Footer/Footer";

function Content() {
    return (
        <div className={style.container}>
            <Header/>
            <Manager/>
            <Features/>
            <Downoload/>
            <Frequently/>
            <Joined/>
            <Footer/>
        </div>
    );
}

export default Content;