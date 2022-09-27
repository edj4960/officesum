import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

import './ImageCarousel.scss';

let images = [];
const imagesLength = 10

for (let i = 1; i <= imagesLength; i++) {
  images.push(require(`../images/hero-${i}.png`));
}

const ImageCarousel = () => {
  const container = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const [imgIdx1, setImgIdx1] = useState(null);
  const [imgIdx2, setImgIdx2] = useState(null);

  const { theme } = useContext(ThemeContext);
  
  const switchImg = (toHide, toShow) => {
    setTimeout(() => {
      toShow.current.classList.remove('hidden');
      toHide.current.classList.add('hidden');
    }, 0);
  }

  useEffect(() => {
    let idx = theme.heroIdx - 1;
    if (img1.current.classList.contains("hidden")) {
      setImgIdx1(idx);
      switchImg(img2, img1);
    } else {
      setImgIdx2(idx);
      switchImg(img1, img2);
    }
  }, [theme]);

  return (
    <div className='carousel'>
      <div className='hero-img-container' ref={container}>
        <img
          className='hero-img img-delay'
          src={imgIdx1 !== null ? images[imgIdx1] : ''}
          ref={img1}
          alt="the office"
        />
        <img
          className='hero-img hidden'
          src={imgIdx2 !== null ? images[imgIdx2] : ''}
          ref={img2}
          alt="the office"
        />
      </div>
    </div>
  );
}

export default ImageCarousel;