import React from 'react'
import l from "../../assets/icones/linkedin-square-icon.svg"

export default function LINKEDINICon({height,filter}) {
  return (
    <img src={l} alt="linkedin icon" style={{ height: `${height}`, filter: `${filter}`}}/>
  )
}
