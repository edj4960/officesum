import React, { useContext, useState } from 'react';
import { LoremContext } from '../providers/LoremProvider';

import './Generator.scss'

const Generator = () => {
  const { generate } = useContext(LoremContext);

  const [paragraphs, setParagraphs] = useState(5);
  const max = 70;
  const min = 2;

  const updateParagraphs = (e) => {
    let value = e.target.value;
    if (value > max) {
      value = max;
    }
    setParagraphs(value);
  }

  return (
    <div className='generator'>
      <div className='description'>
        <span>Gimme like&nbsp;</span>
        <input
          type="number"
          max={max}
          min={2}
          value={paragraphs}
          onChange={updateParagraphs}
        ></input>
        <span>&nbsp;paragraphs of office goodness</span>
      </div>
      <button onClick={() => generate(paragraphs)}>
        Generate
      </button>
    </div>
  )
}

export default Generator;