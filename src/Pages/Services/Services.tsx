import style from './Services.module.scss'
import ServicesItem from "./ServicesItem/ServicesItem.tsx";
import {ServicesList} from "./List.ts";
function Services () {
    return (
        <div className={style.whole}>
            <div className='container'>
            <h2 className={style.title}>Наши услуги :</h2>
                <p className={style.subtitle}>Вы сможете посетить наше СТО и сделать</p>
                <div className={style.items}>
                    {ServicesList.map((item )   => {
                        return  <ServicesItem title={item.title} subtitle={item.subtitle} photo={item.photo}/>
                    })}

                </div>
            </div>
        </div>
    )
}
export default Services