import style from './ServicesMobile.module.scss'
import {ImAppleinc} from "react-icons/im";
import ServiceMobileItem from "./ServiceMobileItem/ServiceMobileItem.tsx";
import TO from '../../../assets/TO.jpeg'
import engine from '../../../assets/engine.jpeg'
import move from '../../../assets/move.jpeg'
import sceplenie from '../../../assets/sceplenie.jpeg'
import arrow from '../../../assets/arrow.png'
import {NavLink} from "react-router-dom";
import truck from '../../../assets/truck.png'
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
        <section id={'services'} className={style.container}>
            {/*<h1 className={style.title}>Послуги для вантажних автомобiлiв</h1>*/}
            <div className={style.titleWrapper}>  <h1 className={style.title}>Послуги</h1>
                <img src={truck} alt={'truck'}/></div>

            <div className={style.wrapper}>
                {items.map((item,index) => <ServiceMobileItem key={index} icon={item.icon} title={item.title} image={item.image}></ServiceMobileItem>)}
            </div>
            <div className={style.more}>
                <img alt={'arrow'} src={arrow}/>
                <NavLink to={'services'}>Бiльше послуг</NavLink>
            </div>

        </section>
    );
};

export default ServicesMobile;