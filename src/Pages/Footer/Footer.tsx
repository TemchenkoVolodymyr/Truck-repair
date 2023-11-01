import style from './Footer.module.scss'
import FooterItem, {IFooter} from "./FooterItem.tsx";
import location from  './../../img/icons/ic_round-pin-drop.svg'
const homeList: IFooter[] = [
    {
        text: 'О нас',
        href: '#'
    },
    {
        text: 'Кто мы?',
        href: '#'
    },
    {
        text: 'Почему мы?',
        href: '#'
    },
    {
        text: 'Остались вопросы?',
        href: '#'
    },
    {
        text: 'Контакты',
        href: '#'
    },
]
const contactsList : IFooter[] = [
    {text : '+380 77 000 77 77' , href : '#'},
    {text : '+380 66 666 66 66' , href : '#'}
]

function Footer() {
    return (
        <>
            <div className={style.block}>
                <div className={style.logo}>
                    <h2>Homenky <span className={style.span}>Truck</span></h2>
                </div>
                <div className={style.nav}>
                    <b className={style.title}><h2>Главная</h2></b>
                    <li className={style.navList}>
                        {homeList.map((item: IFooter) => {
                            return <FooterItem text={item.text} href={item.href}/>
                        })}
                    </li>
                </div>
                <div className={style.contact}>
                    <b className={style.title}><h2>Контакты</h2></b>
                    <li className={style.contactsList}>
                        {contactsList.map((item: IFooter) => {
                            return <FooterItem text={item.text} href={item.href}/>
                        })}
                    </li>
                    <div className={style.street}>
                    <img src={location} alt="location"/>
                        <p>Ул. Новосельского 4</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer