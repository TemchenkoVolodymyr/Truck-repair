import style from './Brands.module.scss'
import scania from '../../assets/scania.svg'
import daf from '../../assets/daf.svg'
import man from '../../assets/man.svg'
import renault from '../../assets/renault.png'
import volvo from '../../assets/volvo.png'

const Brands = () => {
    return (
        <section id={'brand'} className={style.container}>
            <div className={style.info}>
                <h1>С якими брендами мы працюэмо</h1>
                <p>Ми працюємо з найпопулярнішими брендами, такими як SCANIA, VOLVO, MAN, RENAULT, DAF та багатьма
                    іншими популярними моделями!</p>
                <p>Ми працюємо з цими брендами щодня!
                    Найкраща якість обслуговування!
                    У нас найдосвідченіші працівники в місті!</p>
            </div>
            <div className={style.brands}>
                <div className={style.blockImage}>
                    <img src={scania} alt={'brand'}/>
                    <img src={volvo} alt={'brand'}/>
                </div>
                <div className={style.image}>
                    <img src={man} alt={'brand'}/>
                </div>
                <div className={style.blockImage}>
                    <img src={daf} alt={'brand'}/>
                    <img src={renault} alt={'brand'}/>
                </div>
            </div>
        </section>
    );
};

export default Brands;