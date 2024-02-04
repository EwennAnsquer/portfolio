import React from 'react'
import php from "../../assets/icones/css-icon.svg"

export default function CSSIcon({width}) {
  return (
    <img src={php} alt="css icon" style={{ width: `${width}` }}/>
  )
}