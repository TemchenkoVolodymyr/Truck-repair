import style from './ContactUs.module.scss'
import Form from "../Form/Form.tsx";
import bg from '../../assets/contactUsBG.png'
const ContactUs = () => {
    return (
        <section id={'form'} className={style.container} style={{background:`url(${bg})`}}>
            <div className={style.form}>
                <h1>Запишись до нас</h1>
                <p>Ми передзвонимо протягом
                    одого робочого дня</p>
                <Form></Form>
            </div>

        </section>
    );
};

export default ContactUs;