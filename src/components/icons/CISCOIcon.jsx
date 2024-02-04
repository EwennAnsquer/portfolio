import React from 'react'
import c from "../../assets/icones/cisco-icon.svg"

export default function CISCOIcon({width}) {
  return (
    <img src={c} alt="cisco icon" style={{ width: `${width}` }}/>
  )
}
