import React, { useContext } from 'react';
import { LoremContext } from '../providers/LoremProvider';

import './LoremOutput.scss';

const LoremOutput = () => {
  const { text } = useContext(LoremContext);

  return (
    <div className='lorem-output'>
      <div className='container'>
        <div className='page'>
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoremOutput;