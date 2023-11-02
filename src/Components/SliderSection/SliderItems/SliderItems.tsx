
import place from '../../../assets/slider/slider-1.jpg'
import place2 from '../../../assets/slider/slider-2.jpg'
import place3 from '../../../assets/slider/slider-3.jpg'
import {Carousel} from "antd";

import style from './SliderItems.module.scss'
// import {styled} from "styled-components";


// const StyledCarousel = styled(Carousel)`
//   .slick-dots li button {
//     width: 10px;
//     height: 10px;
//     border-radius: 100%;
//   }
//
//   .slick-dots li.slick-active button {
//     width: 10px;
//     height: 10px;
//     border-radius: 100%;
//     background: red;
//   }
// `;

const SliderItems = () => {

    const environment: string[] = [place, place2, place3]
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