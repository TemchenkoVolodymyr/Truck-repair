import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";

const Home = () => {
    return (
        <article className={style.container}>
            <StartSection></StartSection>
            <Brands></Brands>
        </article>
    );
};

export default Home;