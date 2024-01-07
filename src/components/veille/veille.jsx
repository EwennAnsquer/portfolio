import React from 'react'
import "./veille.css"

export default function Veille({children}) {
  return (
    <div className='veille' id='veille'>
      <h1>Ma Veille Informatique</h1>
      {children}
    </div>
  )
}
