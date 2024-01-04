import './App.css'
import './font.css'
import HeroBanner from './components/herobanner/herobanner';
import Navbar from "./components/navbar/navbar";
import Timeline from "./components/timeline/timeline";
import Year from "./components/year/year"
import Veille from "./components/veille/veille"
import Avenir from "./components/avenir/avenir"
import ListeCertifications from './components/listeCertifications/listeCertifications';
import Footer from "./components/footer/footer"
import { useState, useLayoutEffect, useRef } from 'react';

function App() {

    const [heroBannerHeight, setHeroBannerHeight] = useState(0);
    const heroBannerRef = useRef(null);

    useLayoutEffect(() => {
        if (heroBannerRef.current) {
          setHeroBannerHeight(heroBannerRef.current.clientHeight);
        }
    }, [heroBannerRef.current]);

    return (
        <>
            <main>
                <Navbar heroBannerHeight={heroBannerHeight}/>
                <HeroBanner ref={heroBannerRef}/>
                <Timeline />
                {/* <Year id={"2022-2023"} nbProject={2} />
                <Year id={"2023-2024"} nbProject={1} /> */}
                <Veille />
                <Avenir />
                <ListeCertifications />
                <Footer />
            </main>
        </>
    )
}

export default App
