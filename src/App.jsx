import './App.css'
import './font.css'
import HeroBanner from './components/herobanner/herobanner';
import Navbar from "./components/navbar/navbar";
import Timeline from "./components/timeline/timeline";
import Year from "./components/year/year"
import Veille from "./components/veille/veille"
import Avenir from "./components/avenir/avenir"
import Liste from './components/liste/liste';
import Footer from "./components/footer/footer"
import Certification from './components/certification/certification'
import { useState, useLayoutEffect, useRef } from 'react';

import MAILICon from "./components/icons/MAILIcon"
import GITHUBIcon from "./components/icons/GITHUBIcon"
import LINKEDINIcon from "./components/icons/LINKEDINIcon"
import PDFIcon from './components/icons/PDFIcon';
import YTBIcon from './components/icons/YTBIcon'

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
                <Liste name="Certifications" Id="certif" fontSize="50px" fontWeigth="800">
                    <Certification name="Ansi SecNumAcademie" date="12/11/22" file={[["Ansi_SecNumAcademie", "Ansi_SecNumAcademie"]]}/>
                    <Certification name="CNIL" date="18/09/22 et 27/09/22" file={[["Certificat_CNIL_Module1","Certificat_CNIL_Module1"],["Certificat_CNIL_Module2","Certificat_CNIL_Module2"],["Certificat_CNIL_Module3","Certificat_CNIL_Module3"]]}/>
                    <Certification name="Pix" date="19/01/23" file={[["pix","pix"]]}/> {/* nom afficher sur le lien puis nom du fichier dans dossier certifications*/}
                </Liste>
                <Veille>
                    <YTBIcon width={"200px"} />
                    <div className="veilleContainer">
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4S9jVV1k-rA?si=A7du4z6DTKWmv6Bz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/W_UQHr49Tvo?si=fBqdxH_6yz6iM5Uw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/16UpLNC4pos?si=KY1sLV6tuJ47g2Ww" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AQKYSaAvnKs?si=mxjw6ZCx6ONeCSQs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/EQJfDLENYnU?si=kDEUZPn0ZCjtUe6A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/71UbDN4csas?si=JscD2B_Yt9P0mk-7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6U9iC-c15AI?si=AIpGeLibr38FqaJf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/PO4-hP6iq2s?si=A5f0c92OwPE7WiDz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hOwkr2VqpdQ?si=KQ6-TKNxBC0zpPHh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="veilleIframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/udYtHVEwbYA?si=w1_SMWQM1-_rfABb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </Veille>
                <Liste name="Avenir" Id="avenir" fontSize="50px" fontWeigth="800">
                    <Avenir name="Cnam Sécurité Défense Saint-Brieuc"/>
                    <Avenir name="Bachelor Sécurité Informatique Rennes"/>
                    <Avenir name="École d'ingénieur" />
                    <Avenir name="ENSSAT Lannion" />
                </Liste>
                <Footer>
                    <div className="fContainer">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <MAILICon height={"20px"}/>
                                <p>ansquer.ewenn@gmail.com</p>
                            </li>
                            <li>
                                <a href='https://github.com/EwennAnsquer' target='_blank'>
                                    <GITHUBIcon height={"30px"}/>
                                    <p>github.com/EwennAnsquer</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/ewenn-ansquer-87412422b/' target='_blank'>
                                    <LINKEDINIcon height={"30px"} filter={"invert(100%)"}/>
                                    <p>linkedin.com/in/ewenn-ansquer-87412422b/</p>
                                </a>
                            </li>
                            <li>
                                <a href={`/public/cv/CV_Ewenn_Ansquer.pdf`} target='_blank'>
                                    <PDFIcon width={"20px"} /> CV.pdf
                                </a>
                            </li>
                            <li>
                                <a href={`/public/tableau_epreuve_E4/tableau.pdf`} target='_blank'>
                                    <PDFIcon width={"20px"} /> Tableau Épreuve E4.pdf
                                </a>
                            </li>
                        </ul>
                    </div>
                </Footer>
            </main>
        </>
    )
}

export default App
