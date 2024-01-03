import React from 'react';
import './herobanner.css';
import video from "../../assets/video/Topographic_Textures.webm"

const HeroBanner = React.forwardRef((props, ref) => {
  return (
    <div className='herobanner' ref={ref}>
      <div className='hContainer'>
        <video className='video-background' src={video} autoPlay muted loop/>
        <h1 className='hTitle'>Ewenn Ansquer</h1>
      </div>
    </div>
  );
});

export default HeroBanner;