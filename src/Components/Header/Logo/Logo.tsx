
import style from './Logo.module.scss'
import logo from '../../../assets/logo.png'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to={'/'} className={style.link}>
        <div className={style.container}>
            {/*<img src={logo} alt={'logo'}/>*/}
            <h2>CТО</h2>
            <img src={logo} alt={'logo'}/>
            <h2><span>ХОМИ</span></h2>
        </div>
        </NavLink>
    );
};

export default Logo;