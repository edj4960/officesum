import React, { createContext, useEffect, useState } from 'react';
import quotes from '../quotes.json'
import { shuffle } from '../util';

const LoremContext = createContext({
  text: '',
  generate: () => {}
});

const convoToText = (convo) => {
  let output = '';
  convo.forEach(quote => {
    for (const [key, value] of Object.entries(quote)) {
      output += value;
      if (key === 'character') {
        output += ':';
      }
      output += ' ';
    }
  })
  return output;
}

const LoremProvider = props => {
  const [text, setText] = useState('');

  const generate = (paragraphs) => {
    quotes = shuffle(quotes);
    let output = '';
    let currentParagraph = '';

    let i = 0;
    while (paragraphs >= 1) {
      let convo = quotes[i];
      currentParagraph += convoToText(convo);

      if (currentParagraph.length > 250) {
        paragraphs--;
        if (output !== '') {
          output += '\n\n';
        }
        output += currentParagraph;
        currentParagraph = '';
      }

      i++;
    }

    setText(output);
  }

  useEffect(() => {
    generate(5);
  }, []);

  return (
    <LoremContext.Provider
      value={{ text, generate }}
    >
      {props.children}
    </LoremContext.Provider>
  )
}

export { LoremProvider, LoremContext };