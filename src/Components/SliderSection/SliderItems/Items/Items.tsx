import style from "../SliderItems.module.scss";
import {useState} from "react";
import arrowSlider from '../../../../assets/slider/arrowSlider.png'

interface IItemsProps {
    items: string[]
}

const Items = ({items}: IItemsProps) => {

    const [indexImage, setIndexImage] = useState(0)

    const nextItem = () => {
        if(indexImage !== items.length -1)
        setIndexImage(prev => prev +1)
    }

    const previousItem = () => {
        if(indexImage !== 0)
        setIndexImage(prev => prev -1)
    }
    return (
        <>
            <div className={style.item} style={{background: `url(${items[indexImage]})`}}>
                <img className={style.arrowBack} src={arrowSlider} onClick={previousItem} alt={'arrow'}></img>
                <img src={arrowSlider} onClick={nextItem} alt={'arrow'}></img>
            </div>
        </>
    );
};

export default Items;