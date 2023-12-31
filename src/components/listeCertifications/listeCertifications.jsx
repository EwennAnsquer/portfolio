import React from 'react'
import "./listeCertifications.css"
import Certification from '../certification/certification'

export default function ListeCertifications() {
  return (
    <div className='listeCertifications' id='certif'>
        <h1>Mes Certifications</h1>
        <div className="cContainer">
            <Certification/>
            <Certification/>
            <Certification/>
        </div>
    </div>
  )
}
