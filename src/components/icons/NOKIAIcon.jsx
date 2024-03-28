import React from 'react'
import b from "../../assets/icones/nokia.svg"

export default function NOKIAICon({width,filter}) {
  return (
    <img src={b} alt="nokia logo icon" style={{ width: `${width}`, filter: `${filter}`}}/>
  )
}
