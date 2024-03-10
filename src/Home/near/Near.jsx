import React from 'react';
import cl from "./near.module.css"
import arrowLeft from "./arrow-left.svg"
import home from "./home.svg"
import { Link } from "react-router-dom";
import main1 from './img/pic.svg'
import main2 from './img/pic3.svg'
import main3 from './img/pic4.svg'
import main4 from './img/main4.svg'
import main5 from './img/pic5.svg'
import main6 from './img/pic6.svg'
import main7 from './img/pic7.svg'
import main8 from './img/pic8.svg'
import like from './img/main-like.svg'
import Footer from '../../components/Footer';
const Near = () => {
    return (
        <div>
                <header className={cl.header}>
                <Link to="/">
                    <div className={`${cl.header__container} ${cl._container}`}>
                        <a href="#" className={cl.header__icon}>
                            <img src={arrowLeft} alt="" />
                        </a>
                        <a href="#" className={cl.header__icon}>
                            <img src={home} alt="" />
                        </a>
                    </div>
                </Link>
            </header>

            <div className={cl.main}>
                <div className={cl.title}>
                    Рядом с вами
                </div>

                <div className={cl.nearPlace}>
                    Чтобы приложение подсказало ближайшие места рядом с вами, поделитесь геолокацией с ботом в чате. <span style={{ color: 'red' }}>Смотри как это сделать тут</span>
                </div>


            <div className={cl.cards}>

            <div className={cl.card}>
                <img src={main1} alt="" className={cl.asd} />
                <button className={cl.mainLike}>
                    <img src={like} alt="" />
                </button>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>Ресторан</p>
                    <p className={cl.mainSub}>Rene Cafe</p>
                </div>
            </div>

            <div className={cl.card}>
                <img src={main2} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>кафе</p>
                    <p className={cl.mainSub}>Sky Terrace</p>
                </div>
            </div>

            <div className={cl.card}>
                <img src={main3} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>Бар</p>
                    <p className={cl.mainSub}>Studo Porfovoro</p>
                </div>
            </div>
            <div className={cl.card}>
                <img src={main4} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>кофейня</p>
                    <p className={cl.mainSub}>Ohaus</p>
                </div>
            </div>

            <div className={cl.card}>
                <img src={main5} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>ресторан</p>
                    <p className={cl.mainSub}>Ivory Garden</p>
                </div>
            </div>

            <div className={cl.card}>
                <img src={main6} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>БАр</p>
                    <p className={cl.mainSub}>Портофреска</p> 
                </div>
            </div>

            <div className={cl.card}>
                <img src={main7} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>Бар</p>
                    <p className={cl.mainSub}>Terrasa</p> 
                </div>
            </div>
            <div className={cl.card}>
                <img src={main8} alt="" className={cl.asd} />
                <div className={cl.mainLike}>
                    <img src={like} alt="" />
                </div>
                <div className={cl.position}>
                    2.2 км
                </div>
                <div className={cl.mainMatin}>
                    <p  className={cl.mainText}>кафе</p>
                    <p className={cl.mainSub}>Chang cafe</p> 
                </div>
            </div>


        </div>
           
        </div> <Footer />
        </div>
    );
    
}

export default Near;
