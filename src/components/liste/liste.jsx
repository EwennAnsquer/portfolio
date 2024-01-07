import React from 'react'
import "./liste.css"

export default function ListeCertifications({name,Id,children,fontSize,fontWeigth}) {
  return (
    <div className='liste' id={Id}>
        <h1 style={{fontSize: fontSize, fontWeight: fontWeigth}}>{name}</h1>
        <div className="cContainer">
          {children}
        </div>
    </div>
  )
}
