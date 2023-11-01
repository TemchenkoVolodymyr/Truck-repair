import style from './Home.module.scss'
import StartSection from "./StartSection/StartSection.tsx";

const Home = () => {
    return (
        <article className={style.container}>
            <StartSection></StartSection>
        </article>
    );
};

export default Home;