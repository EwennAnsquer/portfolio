import React from 'react'
import "./listeCertifications.css"
import Certification from '../certification/certification'

export default function ListeCertifications() {
  return (
    <div className='listeCertifications' id='certif'>
        <h1>Mes Certifications</h1>
        <div className="cContainer">
            <Certification name="test1" date="02/02/22" file={[["pix","pix"],["pix","pix"]]}/> {/* nom afficher sur le lien puis nom du fichier dans dossier certifications*/}
            <Certification/>
            <Certification/>
        </div>
    </div>
  )
}
