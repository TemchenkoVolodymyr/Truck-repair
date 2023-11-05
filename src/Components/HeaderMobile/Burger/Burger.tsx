import style from './Burger.module.scss'
import {useEffect, useState} from "react";

interface IBurgerProps{
    callback:(arg:boolean) => void
}
const Burger = ({callback} :IBurgerProps ) => {
    const [active, setActive] = useState(false)


    useEffect(() =>{
        callback(active)

    },[active])
    return (
        <div className={style.container}>
            <label className={style.burger} htmlFor="burger">
                <input onChange={() => setActive(!active)} checked={active} type="checkbox" id="burger"/>
                <span style={active ? {backgroundColor: "white"} : {backgroundColor: 'dodgerblue'}}></span>
                <span style={active ? {backgroundColor: "white"} : {backgroundColor: 'dodgerblue'}}></span>
                <span style={active ? {backgroundColor: "white"} : {backgroundColor: 'dodgerblue'}}></span>
            </label>
        </div>
    );
};

export default Burger;