import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";
import Slider from "../SliderSection/SliderSection.tsx";
import Services from "../../Pages/Services/Services.tsx";
import Map from "../../Pages/Map/Map.tsx";
import Footer from "../../Pages/Footer/Footer.tsx";

import ContactUs from "../ContactUs/ContactUs.tsx";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import ServicesMobile from "../../Pages/Services/ServicesMobile/ServicesMobile.tsx";

const Home = () => {
    const [showScrollUp,setShowScrollUp] = useState<boolean>(false)
    const [widnowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    },[window.pageYOffset])

    const handleScroll = () => {
        if (window.pageYOffset > 800) {
            setShowScrollUp(true);
        } else {
            setShowScrollUp(false);
        }
    };


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <article className={style.container}>
            <StartSection></StartSection>
            {widnowWidth > 700 ? <Services/> : <ServicesMobile></ServicesMobile> }
            <Brands></Brands>
            <Slider></Slider>
            <Map/>
            <ContactUs></ContactUs>
            <Footer/>

            {showScrollUp ? <Link  to={'header'} className={style.moveUp}>

                <AiOutlineArrowUp></AiOutlineArrowUp>

            </Link> : null}
        </article>
    );
};

export default Home;