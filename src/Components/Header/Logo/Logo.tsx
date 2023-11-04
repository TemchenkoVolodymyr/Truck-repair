
import style from './Logo.module.scss'
import {NavLink} from "react-router-dom";
import logo from '../../../assets/logoXOMA.png'
const Logo = () => {
    return (
        <NavLink to={'/'} className={style.link}>
        <div className={style.container}>
            {/*<h2>CТО у<span className={style.letter}> ХОМИ</span></h2>*/}
            <div className={style.logo}>
                <img src={logo} alt={'logo'}/>
            </div>

        </div>
        </NavLink>
    );
};

export default Logo;