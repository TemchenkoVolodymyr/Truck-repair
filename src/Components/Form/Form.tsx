import style from './Form.module.scss'
import {useFormik} from "formik";
import axios from "axios";
import {API, TELEGRAM_CHAT_ID} from "./Api.ts";
import {Stack} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from "react";
import  {Toaster} from "react-hot-toast";
import {toastError, toasterSuccess} from "../../Helpers/Toaster/ToasterFunc.tsx";

const Form = () => {
    const date = new Date();
    const [isLoad , setIsLoad] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: '+',
            description : "",
        },
        onSubmit: async (values) => {
            setIsLoad(true)
            const text = `Дата : ${date} \n Заявка от ${values.name}!\nТелефон: ${values.phone}\nПроблема : ${values.description}`;

            try {
                const response = await axios.post(API, {
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    setTimeout(() => {
                        setIsLoad(false)
                        formik.resetForm();
                        toasterSuccess('Success!')
                    }, 2000)

                } else {
                   toastError('Check you internet and try again')
                }
            } catch (error) {
                console.error(error);
                toastError('Check you internet and try again')
            }
        }
    });
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className={style.container} onSubmit={formik.handleSubmit}>
                <div className={style.field}>
                    <input id={'name'} name={'name'}
                           type={'text'}
                           onChange={formik.handleChange}
                           value={formik.values.name}
                           placeholder={'Iм`я'}
                           required={true}
                    />
                </div>

                <div className={style.field}>
                    <input id={'phone'} name={'phone'}
                           type={'tel'} onChange={formik.handleChange}
                           value={formik.values.phone}
                           placeholder={'Номер телефону'}
                           required={true}
                    />
                </div>

                <div className={style.field}>
                <textarea id={'description'} className={style.textArea} name={'description'}
                          required={true}
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          placeholder={'Опишить вашу проблему'}
                />
                </div>

                <div className={style.field} >
                    <button className={style.wrapperBtn}>
                        <Stack direction="row" spacing={2}>
                            <LoadingButton loading={isLoad}  variant="outlined">
                                Submit
                            </LoadingButton>
                        </Stack>
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;