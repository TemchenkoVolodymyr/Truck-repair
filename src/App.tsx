import './App.css'
import Services from "./Pages/Services/Services.tsx";
import Map from "./Pages/Map/Map.tsx";
import Footer from "./Pages/Footer/Footer.tsx";

function App() {

    return (
        <>
            <div className='container'>
                <Services/>
            </div>
            <div>
                <Map/>
                <Footer/>
            </div>
        </>
    )
}

export default App
