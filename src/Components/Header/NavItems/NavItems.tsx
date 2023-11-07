import style from './NavItems.module.scss'
import {IHeaderProps} from "../Header.tsx";
import NavigationMenu from "../../../Helpers/NavigationMenu/NavigationMenu.tsx";



const NavItems = ({setOpen}:IHeaderProps) => {
    return (
        <div className={style.container}>
            <NavigationMenu setOpen={setOpen}></NavigationMenu>
        </div>
    );
};

export default NavItems;