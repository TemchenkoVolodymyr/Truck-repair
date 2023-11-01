import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";
import Slider from "../SliderSection/SliderSection.tsx";

const Home = () => {
    return (
        <article className={style.container}>
            <StartSection></StartSection>
            <Brands></Brands>
            <Slider></Slider>
        </article>
    );
};

export default Home;