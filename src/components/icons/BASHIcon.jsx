import React from 'react'
import b from "../../assets/icones/bash.svg"

export default function BASHICon({width,filter}) {
  return (
    <img src={b} alt="bash icon" style={{ width: `${width}`, filter: `${filter}`}}/>
  )
}
