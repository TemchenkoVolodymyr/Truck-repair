import Logo from "../Header/Logo/Logo.tsx";
import Burger from "./Burger/Burger.tsx";
import style from './HeaderMobile.module.scss'

const HeaderMobile = () => {
    return (
        <section className={style.container}>
            <Logo></Logo>
            <nav>
                {/*<FcPhone></FcPhone>*/}
                <Burger></Burger>
            </nav>
        </section>
    );
};

export default HeaderMobile;