import style from './SliderSection.module.scss'
import SliderItems from "./SliderItems/SliderItems.tsx";

const SliderSection = () => {
    return (
        <section id={'place'} className={style.wrapper}>
            <h1>Майстерня</h1>
            <SliderItems></SliderItems>
        </section>
    );
};

export default SliderSection;