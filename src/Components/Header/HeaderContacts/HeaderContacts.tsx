import style from './HeaderContacts.module.scss'
import mapIcon from '../../../img/icons/Vector (1).svg'
import clock from '../../../img/icons/ant-design_clock-circle-filled.svg'
import mobile from '../../../img/icons/clarity_phone-handset-solid.svg'
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