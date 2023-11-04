
import {Outlet} from "react-router";
import Header from "../../Components/Header/Header.tsx";
import style from './Layout.module.scss'
import ChatQuestion from "../../Components/Home/StartSection/ChatQuestion/ChatQuestion.tsx";
import {useState} from "react";


const Layout = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <article>
                <header>
                    <Header setOpen={setOpen}></Header>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>

                <section className={style.questionWrapper}>
                    <ChatQuestion open={open} setOpen={setOpen}></ChatQuestion>
                </section>
            </article>
        </>
    );
};

export default Layout;