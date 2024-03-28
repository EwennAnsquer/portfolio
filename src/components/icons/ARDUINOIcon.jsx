import React from 'react'
import b from "../../assets/icones/arduino.png"

export default function ARDUINOICon({width,filter}) {
  return (
    <img src={b} alt="arduino icon" style={{ width: `${width}`, filter: `${filter}`}}/>
  )
}
