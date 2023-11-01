import {Route, Routes} from "react-router-dom";
import Layout from "./Router/Layout/Layout.tsx";
import './App.css'
import Home from "./Components/Home/Home.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
