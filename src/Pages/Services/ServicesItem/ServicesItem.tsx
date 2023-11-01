import style from './ServicesItem.module.scss'
export interface IServicesItem {
    title : string,
    subtitle : string,
    photo : string
}
function ServicesItem ({title , subtitle , photo} : IServicesItem) {
    return (
        <div className={style.item}>
            <div className={style.textBlock}>
            <p className={style.title}>{title}</p>
            <p className={style.subtitle}>{subtitle}</p>
            </div>
            <img className={style.photo} src={photo} alt="photo"/>
        </div>
    )
}
export default ServicesItem