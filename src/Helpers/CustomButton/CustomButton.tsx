import {NavLink} from "react-router-dom";
import style from './CustomButton.module.scss'


interface ICustomButtonProps {
    path?: string,
    title: string,
}

const CustomButton = ({path = "#", title}: ICustomButtonProps) => {
    return (
        <>

                <NavLink className={style.container} to={path}>{title}</NavLink>

        </>
    );
};

export default CustomButton;