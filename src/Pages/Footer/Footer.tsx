import style from './Footer.module.scss'
import FooterItem, {IFooter} from "./FooterItem.tsx";
import location from  './../../img/icons/ic_round-pin-drop.svg'
import Logo from "../../Components/Header/Logo/Logo.tsx";
const homeList: IFooter[] = [
    {
        text: 'Майстерня',
        href: '#about'
    },
    {
        text: 'З чим працюємо?',
        href: '#brand'
    },
    {
        text: 'Послуги?',
        href: '#services'
    },
    {
        text: 'Контакти',
        href: '#contacts'
    },
]
const contactsList : IFooter[] = [
    {text : '+38 067 1350458' , href : '#'},
]

function Footer() {
    return (
        <>
            <div id={'contacts'} className={style.block}>
                <div className={style.logo}>
                    <Logo></Logo>
                    {/*<h2>Homa<span className={style.span}>Service</span></h2>*/}
                </div>
                <div className={style.nav}>
                    <b className={style.title}><h2>Головна</h2></b>
                    <li className={style.navList}>
                        {homeList.map((item: IFooter) => {
                            return <FooterItem text={item.text} href={item.href}/>
                        })}
                    </li>
                </div>
                <div className={style.contact}>
                    <b className={style.title}><h2>Контакти</h2></b>
                    <li className={style.contactsList}>
                        {contactsList.map((item: IFooter) => {
                            return <FooterItem text={item.text} href={item.href}/>
                        })}
                    </li>
                    <div className={style.street}>
                    <img src={location} alt="location"/>
                        <a href={'#map'}>м. Черкаси, вул. Гетьмана Сагайдачного, 84/1</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer