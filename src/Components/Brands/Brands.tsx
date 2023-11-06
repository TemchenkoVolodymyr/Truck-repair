import style from './Brands.module.scss'
import scania from '../../assets/scania.svg'
import daf from '../../assets/daf.svg'
import man from '../../assets/man.svg'
import renault from '../../assets/renault.png'
import volvo from '../../assets/volvo.png'
import {useSpring, animated} from 'react-spring';
import BrandsMobile from "./BrandsMobile/BrandsMobile.tsx";
import {useEffect, useState} from "react";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 150, 1.1]
const trans = (x: number, y: number, s: number) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s / 1.2})`
const Brands = () => {
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40}}))
    const [widnowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <section id={'brand'} className={style.wrapperBrand}>
            <animated.div
                onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                onMouseLeave={() => set({xys: [0, 0, 1]})}
                style={{
                    transform:widnowWidth > 700 ? props.xys.interpolate(trans) : '',
                    display: widnowWidth <= 700 ? "block" : 'flex',
                    width: "100%",
                    justifyContent: "space-between"
                }}>
                <div className={style.info}>
                    <h1>З якими брендами ми працюэмо</h1>
                    <p>Ми працюємо з найпопулярнішими брендами, такими як SCANIA, VOLVO, MAN, RENAULT, DAF <span>та багатьма
                        іншими моделями!</span></p>
                    {/*<p>Ми працюємо з цими брендами щодня!*/}
                    {/*    Найкраща якість обслуговування!*/}
                    {/*    У нас найдосвідченіші працівники в місті!</p>*/}
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
                <div className={style.brandsMob}>
                    <BrandsMobile></BrandsMobile>
                </div>


            </animated.div>
        </section>
    );
};

export default Brands;