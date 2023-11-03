// import {NavLink} from "react-router-dom";
import style from './CustomButton.module.scss'


interface ICustomButtonProps {
    path?: string,
    title: string,
}

const CustomButton = ({path = "#", title}: ICustomButtonProps) => {
    return (
        <>
            <a href={path}>
            <div  className={style.container}>
                {/* <NavLink to={path}>{title}</NavLink>*/}
                <h4 className={style.titleBtn}>{title}</h4>
            </div>
            </a>
        </>
    );
};

export default CustomButton;