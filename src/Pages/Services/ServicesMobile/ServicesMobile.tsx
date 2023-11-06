import style from './ServicesMobile.module.scss'
import {ImAppleinc} from "react-icons/im";
import ServiceMobileItem from "./ServiceMobileItem/ServiceMobileItem.tsx";
import TO from '../../../assets/TO.jpeg'
import engine from '../../../assets/engine.jpeg'
import move from '../../../assets/move.jpeg'
import sceplenie from '../../../assets/sceplenie.jpeg'
import arrow from '../../../assets/arrow.png'

const ServicesMobile = () => {

    const items = [{
        image: TO, title: 'ТО та діагностика усіх систем', icon: <ImAppleinc></ImAppleinc>

    }, {
        image: engine, title: 'Ремонт двигунiв', icon: <ImAppleinc></ImAppleinc>
    },{
        image: sceplenie, title: 'Заміна зчеплення', icon: <ImAppleinc></ImAppleinc>

    }, {
        image: move, title: 'Ремонт ходової частини', icon: <ImAppleinc></ImAppleinc>
    }]
    return (
        <section className={style.container}>
            <h1 className={style.title}>Послуги для вантажних автомобiлiв</h1>
            <div className={style.wrapper}>
                {items.map((item,index) => <ServiceMobileItem key={index} icon={item.icon} title={item.title} image={item.image}></ServiceMobileItem>)}
            </div>
            <div className={style.more}>
                {/*<CustomButton title={'Бiльше посгул'}></CustomButton>*/}
                <img alt={'arrow'} src={arrow}/>
                <button>Бiльше посгул</button>
            </div>

        </section>
    );
};

export default ServicesMobile;