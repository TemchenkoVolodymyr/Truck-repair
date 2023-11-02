import style from './NavItems.module.scss'

interface IItem {
    title: string,
    path: string
}

const NavItems = () => {

    const items: IItem[] = [{
        title: "Послуги",
        path: "#services"
    }, {
        title: "Помiщення",
        path: "#place"
    }, {
        title: "Контакти",
        path: "#contacts"
    },]

    return (
        <div className={style.container}>

                {items.map((item, index: number) => <a href={item.path} key={index}>{item.title}</a>)}

        </div>
    );
};

export default NavItems;