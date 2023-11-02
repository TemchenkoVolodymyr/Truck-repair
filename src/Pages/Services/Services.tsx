import style from './Services.module.scss'
import {BsArrowRightShort} from "react-icons/bs";

import {ServicesList} from "./List.ts";
import ServicesItem from "./ServicesItem/ServicesItem.tsx";
import {Link} from "react-router-dom";

function Services () {
    return (
        <div id={'services'} className={style.whole}>
            <div className='container'>
            <h2 className={style.title}>Наши услуги :</h2>
                <p className={style.subtitle}>Вы сможете посетить наше СТО и сделать</p>
                <div className={style.block}>
                    <div className={style.wrapperBlock}>
                        <div className={style.items}>
                            {ServicesList.map((item )   => {
                                return  <ServicesItem title={item.title} photo={item.photo}/>
                            })}
                        </div>
                        <Link to={'/services'} className={style.btn}>
                            Подивитись все
                            <BsArrowRightShort size={'40px'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services