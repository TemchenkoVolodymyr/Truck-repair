import style from './HeaderContacts.module.scss'
import mapIcon from '../../../assets/map-pin.png'
import clock from '../../../assets/clock.png'
import mobile from '../../../assets/mobile.png'
import ContactsItem from "./ContactsItem/ContactsItem.tsx";

const HeaderContacts = () => {
    return (
        <div className={style.container}>
            <section className={style.info}>
                <ContactsItem title={"Наша адресса :"} description={"г.Черкассы, вул. Шевченка"}
                              image={mapIcon}></ContactsItem>
                <span></span>
                <ContactsItem title={"Коли працюємо"} description={"З 8:00 до 20:00 ПН-ПТ"}
                              image={clock}></ContactsItem>
            </section>

            <ContactsItem title={"+7(099)999331"} description={"+7(099)999331"} image={mobile}></ContactsItem>
        </div>
    );
};

export default HeaderContacts;