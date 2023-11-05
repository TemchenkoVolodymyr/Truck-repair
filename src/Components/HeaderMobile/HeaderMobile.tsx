import Logo from "../Header/Logo/Logo.tsx";
import Burger from "./Burger/Burger.tsx";
import style from './HeaderMobile.module.scss'
import BurgerItems from "./BurgerItems/BurgerItems.tsx";
import {useState} from "react";

const HeaderMobile = () => {
    const [openBurger,setOpenBurger] = useState<boolean>(false)

    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                <Logo></Logo>
                <nav>
                    <Burger callback={setOpenBurger}></Burger>
                </nav>
            </div>

            <div className={`${style.main} ${openBurger ? style.open : ""}`}>
                    <BurgerItems></BurgerItems>
            </div>
        </section>
    );
};

export default HeaderMobile;