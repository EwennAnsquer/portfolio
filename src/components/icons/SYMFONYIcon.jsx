import React from 'react'
import symfony from "../../assets/icones/symfony-icon.svg"

export default function PHPIcon({width,filter}) {
  return (
    <img src={symfony} alt="symfony icon" style={{ width: `${width}`, filter: `${filter}` }}/>
  )
}
