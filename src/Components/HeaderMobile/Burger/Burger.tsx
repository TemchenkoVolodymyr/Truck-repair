import style from './Burger.module.scss'
import {useState} from "react";

const Burger = () => {
    const [active, setActive] = useState(false)

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