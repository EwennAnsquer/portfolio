import React from 'react'
import pdf from "../../assets/icones/pdf-icon.png"

export default function PDFIcon({width}) {
  return (
    <img src={pdf} alt="pdf icon" style={{ width: `${width}` }}/>
  )
}
