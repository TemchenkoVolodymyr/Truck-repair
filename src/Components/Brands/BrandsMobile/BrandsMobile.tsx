import style from './BrandsMobile.module.scss'
import scania from '../../../assets/scania.svg'
import daf from '../../../assets/daf.svg'
import man from '../../../assets/man.svg'
import renault from '../../../assets/renault.png'
import volvo from '../../../assets/volvo.png'
import kamaz from '../../../assets/KAMAZ-Logo-PNG_004.png'


const BrandsMobile = () => {
    return (
        <>
        <div className={style.container}>
            <div className={style.imageWrapper}>
                <img src={scania} alt={'brand'}/>
            </div>
            <div className={style.imageWrapper}>
                <img src={man} alt={'brand'}/>
            </div>
            <div className={style.imageWrapper}>
                <img src={daf} alt={'brand'}/>
            </div>
            <div className={style.imageWrapper}>
                <img src={renault} alt={'brand'}/>
            </div>
            <div className={style.imageWrapper}>
                <img src={volvo} alt={'brand'}/>
            </div>
            <div className={style.imageWrapper}>
                <img src={kamaz} alt={'brand'}/>
            </div>
            {/*<img src={scania} alt={'brand'}/>*/}
            {/*<img src={man} alt={'brand'}/>*/}
            {/*<img src={daf} alt={'brand'}/>*/}
            {/*<img src={renault} alt={'brand'}/>*/}
            {/*<img src={volvo} alt={'brand'}/>*/}
            {/*<img src={volvo} alt={'brand'}/>*/}
            <div className={style.line} >

            </div >
        </div>

        </>
    );
};

export default BrandsMobile;