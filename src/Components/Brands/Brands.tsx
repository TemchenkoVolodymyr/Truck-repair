import style from './Brands.module.scss'
import scania from '../../assets/scania.svg'
import daf from '../../assets/daf.svg'
import man from '../../assets/man.svg'
import renault from '../../assets/renault.png'
import volvo from '../../assets/volvo.png'
import {useSpring, animated} from 'react-spring';

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 150, 1.1]
const trans = (x: number, y: number, s: number) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s / 1.2})`
const Brands = () => {
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40}}))
    return (
        <section id={'brand'} className={style.container}>
            <animated.div
                onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                onMouseLeave={() => set({xys: [0, 0, 1]})}
                style={{transform: props.xys.interpolate(trans), display: 'flex', width: "100%",justifyContent:"space-between"}}>
                <div className={style.info}>
                    <h1>С якими брендами мы працюэмо</h1>
                    <p>Ми працюємо з найпопулярнішими брендами, такими як SCANIA, VOLVO, MAN, RENAULT, DAF <span>та багатьма
                        іншими популярними моделями!</span></p>
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


            </animated.div>
        </section>
    );
};

export default Brands;