import style from './Header.module.scss'
import NavItems from "./NavItems/NavItems.tsx";
import Logo from "./Logo/Logo.tsx";
import HeaderContacts from "./HeaderContacts/HeaderContacts.tsx";

const Header = () => {
    return (
        <div className={style.container}>
            <section>
                <HeaderContacts></HeaderContacts>
            </section>
            <nav className={style.nav}>
                <Logo></Logo>
                <NavItems></NavItems>
            </nav>

        </div>
    );
};

export default Header;