// import {NavLink} from "react-router-dom";
import style from './CustomButton.module.scss'


interface ICustomButtonProps {
    path?: string,
    title: string,
    callback?:() => void
}

const CustomButton = ({path = "#", title,callback}: ICustomButtonProps) => {
    return (
        <>
            <a href={path} onClick={callback}>
            <div  className={style.container}>
                {/* <NavLink to={path}>{title}</NavLink>*/}
                <h4 className={style.titleBtn}>{title}</h4>
            </div>
            </a>
        </>
    );
};

export default CustomButton;