import style from './StartSection.module.scss'
import CustomButton from "../../../Helpers/CustomButton/CustomButton.tsx";
import trucks from "../../../assets/trucks.png";
import ChatQuestion from "./ChatQuestion/ChatQuestion.tsx";

const StartSection = () => {

    return (
        <div className={style.container}>
            <div className={style.whole}>
                <section className={style.title}>
                    <h1>Ремонт вантажiвок </h1>
                    <p>Наша майстерня пропонує найкращу якість обслуговування та комфорт</p>
                    <CustomButton title={"Отримати послугу"}/>
                </section>
                <section className={style.image}>
                    <img src={trucks} alt={'truck'}/>
                </section>
            </div>
            <div className={style.questionWrapper}>
                <ChatQuestion></ChatQuestion>
            </div>

        </div>
    );
};

export default StartSection;