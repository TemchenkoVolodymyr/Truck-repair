
import {Outlet} from "react-router";
import Header from "../../Components/Header/Header.tsx";
import style from './Layout.module.scss'
import ChatQuestion from "../../Components/Home/StartSection/ChatQuestion/ChatQuestion.tsx";
import {useEffect, useState} from "react";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile.tsx";


const Layout = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <>
            <article>
                <header>
                    {windowWidth <= 700 ? <HeaderMobile/> :  <Header setOpen={setOpen}></Header> }
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