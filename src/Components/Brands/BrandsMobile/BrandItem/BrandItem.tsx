
import style from './BrandItem.module.scss'

interface IBrandItemProps {
    image:string
}
const BrandItem = ({image} : IBrandItemProps) => {
    return (
        <div className={style.wrapper}>
                <img src={image} alt={'brand'}/>
        </div>
    );
};

export default BrandItem;