import style from './ContactsItems.module.scss'

interface IContactsItemProps {
    image: string,
    title: string,
    description: string
}

const ContactsItem = ({image, title, description}: IContactsItemProps) => {
    return (
        <section className={style.container}>
            <img src={image} alt={'map'}/>
            <ul>
                <li>{title}</li>
                <li className={style.item}>{description}</li>
            </ul>
        </section>
    );
};

export default ContactsItem;