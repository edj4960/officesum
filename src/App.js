import Hero from './components/Hero';
import { ThemeProvider } from './providers/ThemeProvider';
import { LoremProvider } from './providers/LoremProvider';
import LoremOutput from './components/LoremOutput';

import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <LoremProvider>
        <div id="App">
          <Hero />
          <LoremOutput />
        </div>
      </LoremProvider>
    </ThemeProvider>
  );
}

export default App;
