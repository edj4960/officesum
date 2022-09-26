import React from 'react';
import ImageCarousel from './ImageCarousel';

import './Hero.scss';
import Generator from './Generator';

const Hero = () => {

  return (
    <div className='hero-section'>
      <div className='container'>
        <ImageCarousel />
        <div className='title'>
          <h1>officesum</h1>
          <h2>A placeholder text generator of quotes from Dunder Mifflins finest</h2>
          <Generator />
        </div>
      </div>
    </div>
  );
}

export default Hero;