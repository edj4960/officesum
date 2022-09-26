import React, { createContext, useEffect, useState } from 'react';
import themes from '../themes.json';
import { shuffle } from '../util';

themes = shuffle(themes);

const ThemeContext = createContext({
  theme: {}
});

const ThemeProvider = props => {
  const [themeIdx, setThemeIdx] = useState(0);

  const udpateStyles = () => {
    let newTheme = themes[themeIdx];
    const appStyle = document.getElementById('App').style;
    appStyle.setProperty('--primary', newTheme.primary);
    appStyle.setProperty('--dark', newTheme.dark);
  }

  const updateTheme = () => {
    let newIdx = themeIdx + 1;
    if (newIdx >= themes.length) {
      newIdx = 0;
    }
    setThemeIdx(newIdx);
  }

  useEffect(() => {
    udpateStyles();
    setTimeout(() => {
      updateTheme();
    }, 8000);
  }, [themeIdx]);

  return (
    <ThemeContext.Provider
      value={{theme: themes[themeIdx]}}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };