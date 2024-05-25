import './App.css';
import palabras from "./utils/words";
import OneLetter from './components/OneLetter';
import { useState } from 'react';
function App() {
  const [word, setWord] = useState([]);

  const extractWord = () => {
    const index = Math.floor(Math.random() * palabras.length);
    setWord(palabras[index].split("")); 
  }

  return (
    <main>
      <div className='Letters'>
        {
          word.map((letter, index) => <OneLetter key={index} letter={letter}/>)
        }
      </div>
      <button type="button" onClick={extractWord}>PALABRAS</button>
    </main>
  )
}

export default App
