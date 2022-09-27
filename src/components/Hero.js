import React from 'react';
import ImageCarousel from './ImageCarousel';

import './Hero.scss';
import Generator from './Generator';

const Hero = () => {

  return (
    <div className='hero-section'>
      <div className='container'>
        <a
          className='link'
          href='https://github.com/edj4960/officesum'
          target='_blank'
          rel="noreferrer"
        >
          view the repo
        </a>
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