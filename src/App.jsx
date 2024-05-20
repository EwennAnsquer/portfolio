import './App.css'
import './font.css'
import HeroBanner from './components/herobanner/herobanner';
import Navbar from "./components/navbar/navbar";
import Presentation from './components/presentation/presentation';
import Skills from './components/skills/skills'
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
                <Presentation />
                {/* <Skills /> */}
                <Timeline />
                <Liste name="Certifications" Id="certif" fontSize="50px" fontWeigth="800">
                    <Certification name="ANSSI SecNumAcademie" date="12/11/22" file={[["Ansi_SecNumAcademie", "https://dochub.com/m/shared-document/eansquer-ledantec/qA8ldYxVEkAZNZ8R6MJrpP/ansi-secnumacademie-pdf?dt=hVVuGk6J6Ai7xBVLac1B"]]}/>
                    <Certification name="CNIL" date="18/09/22 et 27/09/22" file={[["Certificat_CNIL_Module1","https://dochub.com/m/shared-document/eansquer-ledantec/r4D6EkZVZJjlYA9VpQXW7O/certificat-cnil-module1-pdf?dt=QknAzcY4rzwTx2vG1paj"],["Certificat_CNIL_Module2","https://dochub.com/m/shared-document/eansquer-ledantec/jo3xELpR3A8k5YkVJBa7nr/certificat-cnil-module2-pdf?dt=uyN427-XjxExivKG7TPL"],["Certificat_CNIL_Module3","https://dochub.com/m/shared-document/eansquer-ledantec/Xv7zYW5RnlX3rd0V2A9egx/certificat-cnil-module3-pdf?dt=QpTyTaVtPa77iBrh1G5o"]]}/>
                    <Certification name="Pix" date="19/01/23" file={[["pix","https://dochub.com/m/shared-document/eansquer-ledantec/P0B76b3K6d8Yv2Awn2y1Gg/pix-pdf?dt=ZMXH_1KJkRgPRfqLxqKr"]]}/> {/* nom afficher sur le lien puis nom du fichier dans dossier certifications*/}
                    <Certification name="RootMe" date="" file={[]} />
                </Liste>
                <Veille>
                    <YTBIcon width={"200px"} />
                    <div className="veilleContainer">
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
                <Liste name="Poursuite d'étude" Id="avenir" fontSize="50px" fontWeigth="800">
                    <Avenir name="Cnam Sécurité Défense Saint-Brieuc" lieu="22400 PLOUFRAGAN" formation="Informatique & Réseaux" />
                    <Avenir name="Pôle Sup de La Salle" lieu="35706 RENNES" formation="Bachelor Sécurité Informatique" />
                    <Avenir name="ENSSAT" lieu="22300 LANNION" formation="Informatique" />
                    <Avenir name="IMT Atlantique" lieu="35576 Cesson-Sévigné" formation="Ingénierie Logicielle" />
                    <Avenir name="IMT Mines Alès" lieu="30100 Alès" formation="Informatique et Réseaux Parcours Développement Logiciel" />
                    <Avenir name="IMT Nord Europe" lieu="59650 Villeneuve-d’Ascq" formation="Informatique et Télécommunications" />
                    <Avenir name="Télécom Nancy" lieu="54600 Villers-lès-Nancy" formation="Ingénieur en Informatique" />
                    <Avenir name="Télécom Saint-Etienne" lieu="42000 Saint-Etienne" formation="Data Engineering" />
                    <Avenir name="Télécom SudParis" lieu="91011 Evry" formation="Informatique & Réseaux" />
                    <Avenir name="Licence 3" lieu="35042 RENNES" formation="mention Informatique parcours Informatique" />
                    <Avenir name="ESIR" lieu="35042 RENNES" formation="spécialité informatique 1ère année" />
                    <Avenir name="PREPA ATS" lieu="22300 LANNION" formation="" />
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
                                <a href={`https://dochub.com/m/shared-document/eansquer-ledantec/275eAYrVo3d8Q56VzXnBNQ/cv-ewenn-ansquer-pdf?dt=mrsVhtBizDbDxBNc1CVi`} target='_blank'>
                                    <PDFIcon width={"20px"} /> CV.pdf
                                </a>
                            </li>
                            <li>
                                <a href={`https://dochub.com/m/shared-document/ansquer-ewenn/mqNjP3BVW1bdr73R9yGzLk/tableau-de-synthese-epreuve-e4-bts-sio-2024-pdf?dt=qxNwT5G6fGfvjYufJ11Q`} target='_blank'>
                                    <PDFIcon width={"20px"} /> Tableau Épreuve E4.pdf
                                </a>
                            </li>
                            <li>
                                <a href={`https://dochub.com/m/shared-document/ansquer-ewenn/Xv7zYW5RnloEmy9V2A9egx/attestation-stage-1er-annee-bts-pdf?dt=j6W3za3CXz6uwztU7aqA`} target='_blank'>
                                    <PDFIcon width={"20px"} /> Attestation-Stage-1er-Année.pdf
                                </a>
                            </li>
                            <li>
                                <a href={`https://dochub.com/m/shared-document/ansquer-ewenn/gp5nv1EK7EymajowGlbo0J/attestation-stage-2eme-annee-bts-pdf?dt=js_pru14aitvxgEvmf14`} target='_blank'>
                                    <PDFIcon width={"20px"} /> Attestation-Stage-2eme-Année.pdf
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
