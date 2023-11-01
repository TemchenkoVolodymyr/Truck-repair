import {NavLink} from "react-router-dom";
import style from './CustomButton.module.scss'


interface ICustomButtonProps {
    path?: string,
    title: string,
}

const CustomButton = ({path = "#", title}: ICustomButtonProps) => {
    return (
        <>
            <div className={style.container}>
                <NavLink to={path}>{title}</NavLink>
            </div>

        </>
    );
};

export default CustomButton;