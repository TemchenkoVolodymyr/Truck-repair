import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";
import Slider from "../SliderSection/SliderSection.tsx";

import ContactUs from "../ContactUs/ContactUs.tsx";

const Home = () => {
    return (
        <article className={style.container}>
            <StartSection></StartSection>
            <Brands></Brands>
            <Slider></Slider>
            <ContactUs></ContactUs>
        </article>
    );
};

export default Home;