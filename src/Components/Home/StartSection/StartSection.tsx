import style from './StartSection.module.scss'
import CustomButton from "../../../Helpers/CustomButton/CustomButton.tsx";
import trucks from "../../../assets/trucks.png";
import {TypeAnimation} from "react-type-animation";


const StartSection = () => {

    return (
        <div id={'about'} className={style.wrapper}>
            <div className={style.whole}>
                <section className={style.title}>
                    <h1 >TIR CTO</h1>
                    <div className={style.wrapperType}>
                        <TypeAnimation sequence={["Вантажних автомобiлiв",4000,
                            'Причiпiв',4000,'Напiвпричепiв',3000
                        ]} wrapper={'span'} speed={50} style={{ display: 'inline-block' }} repeat={Infinity}></TypeAnimation>
                    </div>
                    <p>Наша майстерня пропонує <span>індивідуальний підхід</span> до клієнта / <span>Пошук та доставка запасних частин</span></p>
                    <CustomButton  path={'#form'} title={"Забронювати вiзит"}/>
                </section>
                <section className={style.image}>
                    <img src={trucks} alt={'truck'}/>
                </section>
            </div>



        </div>
    );
};

export default StartSection;