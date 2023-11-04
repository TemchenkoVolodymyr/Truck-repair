import style from './Header.module.scss'
import NavItems from "./NavItems/NavItems.tsx";
import Logo from "./Logo/Logo.tsx";
import {Dispatch, SetStateAction} from "react";

export interface IHeaderProps{
    setOpen:Dispatch<SetStateAction<boolean>>
}
const Header = ({setOpen}:IHeaderProps) => {
    return (
        <div className={style.container} id={'header'}>
            <nav className={style.nav}>
                <Logo></Logo>
                <NavItems setOpen={setOpen}></NavItems>
            </nav>

        </div>
    );
};

export default Header;