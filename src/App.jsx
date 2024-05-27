import "./App.css";
import palabras from "./utils/words";
import OneLetter from "./components/OneLetter";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState([]);
  const [cardsLetter, setCardsLetter] = useState([]);

  const extractWord = () => {
    const index = Math.floor(Math.random() * palabras.length);
    setWord(palabras[index].split(""));
  };

  useEffect(() => {
    const letras = "abcdefghijklmnopqrstuvwxyz";

    const newpalabra = word.join("") + letras;

    const letrasArray = newpalabra.split("");

    const mezclar = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    setCardsLetter(mezclar(letrasArray));
  }, [word]);

  return (
    <main>
      <div className="Letters">
        {word.map((letter, index) => (
          <OneLetter key={index} letter={letter} />
        ))}
      </div>
      <button type="button" onClick={extractWord}>
        PALABRAS
      </button>
      <div className="CardsContainer">
        {
          cardsLetter.map((letter, index) =>  <Card key={index} letter={letter}/>)
        }
      </div>
    </main>
  );
}

export default App;
