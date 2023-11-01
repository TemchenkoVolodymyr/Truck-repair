import StartSection from "./StartSection/StartSection.tsx";
import Brands from "../Brands/Brands.tsx";
import Slider from "../SliderSection/SliderSection.tsx";
import Services from "../../Pages/Services/Services.tsx";
import Map from "../../Pages/Map/Map.tsx";
import Footer from "../../Pages/Footer/Footer.tsx";

const Home = () => {
    return (
        <>
            <article>
                <StartSection/>
                <Services/>
                <Brands/>
                <Slider/>
                <Map/>
                <Footer/>
            </article>
        </>

    );
};

export default Home;