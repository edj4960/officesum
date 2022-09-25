import React, { useEffect, useRef, useState } from 'react';
import { shuffle } from '../util';

import './ImageCarousel.scss';

const images = shuffle([
  require('../images/hero-1.png'),
  require('../images/hero-2.png'),
  require('../images/hero-3.png'),
  require('../images/hero-4.png'),
]);

const ImageCarousel = () => {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(1);

  const getNextIdx = (idx) => {
    let nexIdx = idx + 2;
    console.log(nexIdx);
    if (nexIdx === images.length) {
      return 0;
    } else if (nexIdx > images.length) {
      return 1;
    }
    return nexIdx;
  }

  const updateIdx = (idxId) => {
    if (idxId === 1) {
      setIdx1(getNextIdx(idx1));
    } else {
      setIdx2(getNextIdx(idx2));
    }
  }

  useEffect(() => {
    // Set img1 idx
    setTimeout(() => {
      updateIdx(2);
    }, 22000);
    // Set img2 idx
    setTimeout(() => {
      updateIdx(2);
    }, 12000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      updateIdx(1);
    }, 20000);
  }, [idx1]);

  useEffect(() => {
    setTimeout(() => {
      updateIdx(2);
    }, 20000);
  }, [idx2]);

  return (
    <div className='hero-img-container'>
      <img className='hero-img' src={images[idx1]} />
      <img className='hero-img' src={images[idx2]} />
    </div>
  );
}

export default ImageCarousel;