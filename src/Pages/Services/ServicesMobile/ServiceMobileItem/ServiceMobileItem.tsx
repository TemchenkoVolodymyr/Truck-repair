import style from './ServiceMobileItem.module.scss'
import {ReactNode} from "react";

interface IServiceMobileItemProps {
    image: string,
    title: string,
    icon: ReactNode,
}

const ServiceMobileItem = ({image, title}: IServiceMobileItemProps) => {
    return (
        <div className={style.container} style={{background: `url(${image})`}}>
            <div className={style.wrapper}>
                <p>{title}</p>
            </div>

        </div>
    );
};

export default ServiceMobileItem;