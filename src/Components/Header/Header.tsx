import style from './Header.module.scss'
import NavItems from "./NavItems/NavItems.tsx";
import Logo from "./Logo/Logo.tsx";

const Header = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <Logo></Logo>
                <NavItems></NavItems>

            </nav>

        </div>
    );
};

export default Header;