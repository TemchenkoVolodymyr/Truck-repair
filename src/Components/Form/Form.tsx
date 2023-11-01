import style from './Form.module.scss'
import {useFormik} from "formik";
import CustomButton from "../../Helpers/CustomButton/CustomButton.tsx";

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <form className={style.container} onSubmit={formik.handleSubmit}>
            <div className={style.field}>
                <input id={'name'} name={'name'}
                       type={'text'}
                       onChange={formik.handleChange}
                       value={formik.values.name}
                       placeholder={'Iм`я'}
                />
            </div>

            <div className={style.field}>
                <input id={'phone'} name={'phone'}
                       type={'tel'} onChange={formik.handleChange}
                       value={formik.values.phone}
                       placeholder={'Номер телефону'}
                />
            </div>

            <div className={style.field} >
                <CustomButton title={'Записатись'}></CustomButton>
            </div>
        </form>
    );
};

export default Form;