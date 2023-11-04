import question from '../../../../assets/question.png'
import style from './ChatQuestion.module.scss'
import { useState} from "react";
import CustomButton from "../../../../Helpers/CustomButton/CustomButton.tsx";
import {GoDotFill} from "react-icons/go";

const ChatQuestion = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [questionValue,setQuestionValue] = useState<string>('')
    const [phoneValue,setPhoneValue] = useState<number | string>("")


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
                    <div className={style.contact}>
                        <textarea  placeholder={"Питання"} value={questionValue} onChange={(e) => setQuestionValue(e.target.value)}/>
                        <input type={'tel'}  placeholder={"+38"} value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)}/>
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