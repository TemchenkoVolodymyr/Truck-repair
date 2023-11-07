import style from './BrandsMobile.module.scss'
import scania from '../../../assets/scania.svg'
import daf from '../../../assets/daf.svg'
import man from '../../../assets/man.svg'
import renault from '../../../assets/renault.png'
import volvo from '../../../assets/volvo.png'
import kamaz from '../../../assets/KAMAZ-Logo-PNG_004.png'
import BrandItem from "./BrandItem/BrandItem.tsx";


const BrandsMobile = () => {

    const brands = [scania,man,daf,renault,volvo,kamaz]
    return (
        <>
        <div className={style.container}>
            {brands.map((brand,index) => <BrandItem key={index} image={brand}></BrandItem>)}
            <div className={style.line}></div >
        </div>

        </>
    );
};

export default BrandsMobile;