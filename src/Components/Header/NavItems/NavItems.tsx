import style from './NavItems.module.scss'
import ExampleNavigationMenu from "./ServiceItemsModal/ServiceItemsModal.tsx";
import {IHeaderProps} from "../Header.tsx";



const NavItems = ({setOpen}:IHeaderProps) => {
    return (
        <div className={style.container}>
            <ExampleNavigationMenu setOpen={setOpen}></ExampleNavigationMenu>
        </div>
    );
};

export default NavItems;