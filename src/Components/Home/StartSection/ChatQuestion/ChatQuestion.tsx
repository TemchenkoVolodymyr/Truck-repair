import question from '../../../../assets/question.png'
import style from './ChatQuestion.module.scss'
import {useState} from "react";
import {GoDotFill} from "react-icons/go";
import {submitForm} from "../../../../Requests/SumbitForm.ts";
import LoadingButton from "@mui/lab/LoadingButton";
import {useFormik} from "formik";
import {Stack} from "@mui/material";

export interface IChatQuestionProps {
    open:boolean,
    setOpen:(arg:boolean) => void
}
const ChatQuestion = ({open,setOpen}:IChatQuestionProps) => {

    const [isLoad, setIsLoad] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            question: "",
            phone: '',
        },
        onSubmit: async (values) => {
            console.log('s')
            setIsLoad(true)
            const text = `Дата : ${new Date()}  \n Номер телефону : ${values.phone} , \n Питання : ${values.question}`;
            submitForm({text, setIsLoad, formik})

        }
    });

    return (
        <>
            <div className={style.container}>
                {open ? <section className={style.modal}>
                    <header>
                        <h3>Технічний спеціаліст <GoDotFill color={'green'}></GoDotFill></h3>
                    </header>
                    <main>
                        <div className={style.wrapperMessage}>
                            <p>Напишіть своє запитання та майстер вам передзвонити протягом 1-ї години</p>
                        </div>
                    </main>
                    <form className={style.contact} onSubmit={formik.handleSubmit}>

                        <textarea id={'question'} placeholder={"Питання"} value={formik.values.question}
                                  onChange={formik.handleChange}
                                  required={true}
                        />
                            <input id={'phone'} type={'tel'} placeholder={"+38"} value={formik.values.phone}
                                   onChange={formik.handleChange}
                                   required={true}
                            />
                        <button className={style.wrapperButton}>
                            <Stack direction="row" spacing={2}>
                                <LoadingButton style={{color:'#4762FF',border:'1px solid #4762FF'}} loading={isLoad} variant="outlined">
                                    Запитати
                                </LoadingButton>
                            </Stack>
                        </button>
                    </form>


                </section> : null}

                <div className={style.wrapperIcon} onClick={() => setOpen(!open)}>
                    <img className={style.icon} alt={'icon'} src={question}/>
                </div>

            </div>
        </>
    );
};

export default ChatQuestion;