import style from './Layout.module.scss'
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <article className={style.container}>
            <header>
                Header
            </header>

            <main>
                <Outlet></Outlet>
            </main>

        </article>
    );
};

export default Layout;