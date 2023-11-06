
import itemOne from '../../../assets/slider/DP.png'
import itemTwo from '../../../assets/slider/env.png'
import itemThree from '../../../assets/slider/down.png'
import itemFour from '../../../assets/slider/under.png'
import ItemFive from '../../../assets/slider/cars.png'
import itemSix from '../../../assets/slider/trucks.png'
import {Carousel} from "antd";

import style from './SliderItems.module.scss'
const SliderItems = () => {

    const environment: string[] = [itemOne, itemTwo, itemThree,itemFour,ItemFive,itemSix]
    return (
        <>
            <div className={style.container}>
                <Carousel autoplay >
                    {environment.map((item,index) => <div className={style.wrapper} key={index}><img src={item} alt={'image'}/></div>)}
                </Carousel>
            </div>

        </>
    );
};

export default SliderItems;