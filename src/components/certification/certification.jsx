import React from 'react'
import "./certification.css"
import PDFIcon from "../icons/PDFIcon"

export default function Certification({name,date,file}) {
  return (
    <div className='certification'>
        <div className="certificationTitle">
          <h1>{name}</h1>
        </div>
        <div className="certificationDate">
          <h2>{date}</h2>
        </div>
        <div className="certificationFile">
          {file && file.length > 0 ? (
            file.map((item,index) => (
              <a key={index} href={`/portfolio/public/certifications/${item[1]}.pdf`} name={item[0]} target='_blank'>
                <PDFIcon width={"20pxpx"} /> {item[0]}.pdf
              </a>
            ))
          ) : (
            <p>nothing</p>
          )}
        </div>
    </div>
  )
}
