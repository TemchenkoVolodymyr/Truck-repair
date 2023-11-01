import {Route, Routes} from "react-router-dom";
import Layout from "./Router/Layout/Layout.tsx";
import './App.css'

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </>
    )
}

export default App
