import React, {ref, useRef} from 'react';
import './herobanner.css';
import video from "../../assets/video/Topographic_Textures.webm"

const HeroBanner = React.forwardRef((props, ref) => {
  let machin = useRef(null)
  const truc= ()=>{
    console.log(machin)
  }
  return (
    <div className='herobanner' ref={ref}>
      <div className='hContainer'>
        <video className='video-background' src={video} autoPlay muted loop/>
        <h1 className='hTitle'>Ewenn Ansquer</h1>
        <div className="overlay" onScroll={truc} ref={machin}></div>
      </div>
    </div>
  );
});

export default HeroBanner;