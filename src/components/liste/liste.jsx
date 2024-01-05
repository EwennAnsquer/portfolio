import React from 'react'
import "./liste.css"

export default function ListeCertifications({name,Id,children}) {
  return (
    <div className='liste' id={Id}>
        <h1>{name}</h1>
        <div className="cContainer">
          {children}
        </div>
    </div>
  )
}
