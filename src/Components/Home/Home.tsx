import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";
import Slider from "../SliderSection/SliderSection.tsx";
import Services from "../../Pages/Services/Services.tsx";
import Map from "../../Pages/Map/Map.tsx";
import Footer from "../../Pages/Footer/Footer.tsx";

import ContactUs from "../ContactUs/ContactUs.tsx";

const Home = () => {
    return (
        <article className={style.container}>
            <StartSection></StartSection>
            <Services/>
            <Brands></Brands>
            <Slider></Slider>
            <Map/>
            <ContactUs></ContactUs>
            <Footer/>
        </article>
    );
};

export default Home;