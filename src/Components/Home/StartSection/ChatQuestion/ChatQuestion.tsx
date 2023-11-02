import question from '../../../../assets/question.png'
import style from './ChatQuestion.module.scss'
import { useState} from "react";
import CustomButton from "../../../../Helpers/CustomButton/CustomButton.tsx";

const ChatQuestion = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [questionValue,setQuestionValue] = useState<string>('')
    const [phoneValue,setPhoneValue] = useState<number | string>("")


    return (
        <>
            <div className={style.container}>

                {open ? <section className={style.modal}>
                    <header>
                        <h3>Чат Пiдтримка</h3>
                    </header>
                    <main>

                        <div className={style.wrapperMessage}>
                            <p>Доброго Дня, напишіть нам якщо у вас є якісь питання</p>
                        </div>
                    </main>
                    <div className={style.contact}>
                        <input type={'text'} placeholder={"Питання"} value={questionValue} onChange={(e) => setQuestionValue(e.target.value)}/>
                        <input type={'text'} placeholder={"+38"} value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)}/>
                        <CustomButton title={'Вiдправити'}></CustomButton>
                    </div>


                </section> : null}

                <div className={style.wrapperIcon} onClick={() => setOpen(!open)}>
                    <img className={style.icon} alt={'icon'} src={question}/>
                </div>

            </div>
        </>
    );
};

export default ChatQuestion;