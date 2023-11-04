import axios from "axios";
import {API, TELEGRAM_CHAT_ID} from "../Components/Form/Api.ts";
import {toastError, toasterSuccess} from "../Helpers/Toaster/ToasterFunc.tsx";

interface ISubmitForm{
    text:string,
    setIsLoad:(arg:boolean) => void,
    formik:any
}

export const submitForm  = async ({text, setIsLoad, formik}:ISubmitForm) => {
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