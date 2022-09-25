import './App.css';
import Hero from './components/Hero';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div id="App">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
