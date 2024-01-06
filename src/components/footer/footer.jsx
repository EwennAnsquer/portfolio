import React from 'react'
import "./footer.css"
import video from "../../assets/video/Topographic_Textures.webm"

export default function Footer({children}) {
  return (
    <div className='footer' id='contact'>
      <div className="fVideoContainer">
        <video className='video-background-footer' src={video} autoPlay muted loop/>
        <div className="overlayFooter"></div>
      </div>
      {children}
    </div>
  )
}
