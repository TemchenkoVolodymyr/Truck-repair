import style from './StartSection.module.scss'
import CustomButton from "../../../Helpers/CustomButton/CustomButton.tsx";
import trucks from "../../../assets/trucks.png";


const StartSection = () => {

    return (
        <div id={'about'} className={style.container}>
            <div className={style.whole}>
                <section className={style.title}>
                    <h1><span>TIR СТО </span><span className={style.letter}>Вантажних автомобiлiв,причiпiв та напiвпричепiв</span></h1>
                    <p>Наша майстерня пропонує <span>індивідуальний підхід</span> до клієнта / <span>Пошук та доставка запасних частин</span></p>
                    <CustomButton  path={'#form'} title={"Отримати послугу"}/>
                </section>
                <section className={style.image}>
                    <img src={trucks} alt={'truck'}/>
                </section>
            </div>



        </div>
    );
};

export default StartSection;