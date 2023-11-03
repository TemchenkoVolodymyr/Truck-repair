import {CircularProgress} from "@mui/joy";
import style from './Spinner.module.scss'
export function Spinner () {
    return (
        <div className={style.container}>
            <CircularProgress/>
        </div>
    )
}