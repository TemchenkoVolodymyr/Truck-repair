import style from './NavItems.module.scss'
import {Link} from "react-scroll";

interface IItem {
    title: string,
    path: string
}

const NavItems = () => {

    const items: IItem[] = [{
        title: "Послуги",
        path: "#"
    }, {
        title: "Помiщення",
        path: "#"
    }, {
        title: "Контакти",
        path: "#"
    },]

    return (
        <div className={style.container}>

                {items.map((item, index: number) => <Link to={item.path} key={index}>{item.title}</Link>)}

        </div>
    );
};

export default NavItems;