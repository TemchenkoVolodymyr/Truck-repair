import style from './NavItems.module.scss'
import ExampleNavigationMenu from "./ServiceItemsModal/ServiceItemsModal.tsx";



const NavItems = () => {



    return (
        <div className={style.container}>
            <ExampleNavigationMenu></ExampleNavigationMenu>
        </div>
    );
};

export default NavItems;