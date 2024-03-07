import React from 'react'
import "./avenir.css"

export default function Avenir({name,lieu,formation}) {
  return (
    <div className='avenir'>
        <h1>{name}</h1>
        <h2>{formation}</h2>
        <h2>{lieu}</h2>
    </div>
  )
}
