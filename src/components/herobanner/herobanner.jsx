import React from 'react';
import './herobanner.css';

const HeroBanner = React.forwardRef((props, ref) => {
  return (
    <div className='herobanner' ref={ref}>
      <div className='hContainer'>
        <h1 className='hTitle'>Ewenn Ansquer</h1>
      </div>
    </div>
  );
});

export default HeroBanner;