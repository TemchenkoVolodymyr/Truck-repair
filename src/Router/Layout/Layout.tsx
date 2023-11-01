
import {Outlet} from "react-router";
import Header from "../../Components/Header/Header.tsx";


const Layout = () => {
    return (
        <>
            <article>
                <header>
                    <Header></Header>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </article>
        </>
    );
};

export default Layout;