import style from './ContactsItems.module.scss'

interface IContactsItemProps {
    image?: string,
    title: string,
    description?: string,
    path?:string,
    tel?:boolean
}

const ContactsItem = ({image, title, description,path,tel}: IContactsItemProps) => {
    return (
        <section className={style.container}>
            <img src={image} alt={'map'}/>
            {tel ? <a className={style.tel} href={path} target="_blank" rel="noopener noreferrer">
                {title}
            </a> :   <ul>
                <li>{title}</li>
                <li className={style.item}>{description}</li>
            </ul>}


        </section>
    );
};

export default ContactsItem;