import React, { useContext, useEffect, useRef, useState } from 'react';
// import { shuffle } from '../util';
// import themesJson from '../themes.json';
import { ThemeContext } from '../providers/ThemeProvider';
import hero1 from '../images/hero-1.png';

import './ImageCarousel.scss';

// const themes = shuffle(themesJson);

const ImageCarousel = () => {
  const container = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const [imgStyle, setImgStyle] = useState({});

  const { theme } = useContext(ThemeContext);

  const image = require(`../images/hero-${theme.heroIdx}.png`);

  useEffect(() => {
    let newStyle = {
      backgroundImage: `url(${image})`
    }

    setImgStyle(newStyle);
  }, [theme, image]);

  return (
    <div className='carousel'>
      <div className='hero-img-container' ref={container}>
        <div className='hero-img' ref={img1} style={imgStyle} />
      </div>
    </div>
  );
}

export default ImageCarousel;