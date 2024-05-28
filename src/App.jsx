import "./App.css";
import palabras from "./utils/words";
import pistas from "./utils/pistas";
import OneLetter from "./components/OneLetter";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import conffeti from 'canvas-confetti';

function App() {
  const [word, setWord] = useState([]);
  const [wordCheck, setWordCheck] = useState([]);
  const [cardsLetter, setCardsLetter] = useState([]);
  const [pistasState, setPistasState] = useState("");
  const [points, setPoints] = useState(0);

  const mezclar = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const randomLetters = (letras = "") => {
     let letrasarray = letras.split("");
     let letrasrandom = [];

     for (let i = 0; i < Math.floor(Math.random() * (10 - 3 + 1)) + 3; i++) {
      letrasrandom += letrasarray[Math.floor(Math.random() * 26)]; 
     }
     return letrasrandom
  }

  const extractWord = () => {
    const index = Math.floor(Math.random() * palabras.length);
    setWord(palabras[index].split(""));
    setPistasState(pistas[index]);
    setWordCheck([]);
  };

  useEffect(() => {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const newpalabra = word.join("") + randomLetters(letras);
    const letrasArray = newpalabra.split("");
    setCardsLetter(mezclar(letrasArray));
  }, [word]);

  useEffect(() => {  //useEffect de la victoria
    console.log(wordCheck);
    console.log(word);
    if (word.join("") === wordCheck.join("") && wordCheck.join("") !== "") {
      conffeti();
      setPoints(before => before + 1);
    }
  },[wordCheck, word]);

  return (
    <main>
      <div className="pointsTable">
        <p>Palabras acertadas: {points}</p>
      </div>
      <div className="Letters">
        {wordCheck.map((letter, index) => (
          <OneLetter key={index} letter={letter} />
        ))}
      </div>
      <p className="pistas">{pistasState}</p>
      <button type="button" onClick={extractWord}>
        PALABRAS
      </button>
      <div className="CardsContainer">
        {
          cardsLetter.map((letter, index) =>  <Card key={index}
                                                    letter={letter} 
                                                    letterFromCard={L => setWordCheck((before) => [...before, L])}
                                                    />)
        }
      </div>
    </main>
  );
}

export default App;
