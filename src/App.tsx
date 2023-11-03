import {Route, Routes} from "react-router-dom";
import Layout from "./Router/Layout/Layout.tsx";
import './App.css'
import Home from "./Components/Home/Home.tsx";
import React, {Suspense} from "react";
import {Spinner} from "./Helpers/Spinner/Spinner.tsx";


function App() {
    const ServicesTablePage = React.lazy(() => import('./Pages/ServicesPage/ServicesTablePage.tsx'))
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path={'/services'} element={<Suspense fallback={<Spinner/>}>
                        <ServicesTablePage/>
                    </Suspense>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
