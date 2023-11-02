import style from './HeaderContacts.module.scss'
import mapIcon from '../../../img/icons/Vector (1).svg'
import clock from '../../../img/icons/ant-design_clock-circle-filled.svg'
import mobile from '../../../img/icons/clarity_phone-handset-solid.svg'
import ContactsItem from "./ContactsItem/ContactsItem.tsx";

const HeaderContacts = () => {
    return (
        <div className={style.container}>
            <section className={style.info}>
                <ContactsItem title={"Наша адресса :"} description={"м. Черкаси, вул. Гетьмана Сагайдачного 84/1 (територія Черкаська мехколона)"}
                              image={mapIcon}></ContactsItem>
                <span></span>
                <ContactsItem title={"Коли працюємо"} description={"З 8:00 до 19:00 ПН-ПТ/ 8:00 до 17:00 Сб"}
                              image={clock}></ContactsItem>
            </section>

            <ContactsItem path={"https://t.me/HomenkyTruckServer"} tel={true} title={"+38067-135-04-58"} description={"+38067-135-04-58"} image={mobile}></ContactsItem>
        </div>
    );
};

export default HeaderContacts;