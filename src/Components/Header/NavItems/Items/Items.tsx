import style from './Items.module.scss'
import {IServices} from "../ServiceItemsModal/ServiceItemsModal.tsx";
import {NavLink} from "react-router-dom";

interface IItemsProps {
    services: IServices[]
}

const Items = ({services}: IItemsProps) => {
    return (
        <div className={style.container}>
            {services.map((item,index) => <div className={style.item}
                                               key={index}><NavLink to={'services'}>{item.service.title}</NavLink></div>)}
        </div>
    );
};

export default Items;