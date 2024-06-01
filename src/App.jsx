import "./App.css";
import palabras from "./utils/words";
import pistas from "./utils/pistas";
import OneLetter from "./components/OneLetter";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import conffeti from "canvas-confetti";

function App() {
  const [word, setWord] = useState([]);
  const [wordCheck, setWordCheck] = useState([]);
  const [cardsLetter, setCardsLetter] = useState([]);
  const [pistasState, setPistasState] = useState("");
  const [points, setPoints] = useState(0);
  const [victoryModal, setVictoryModal] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [initGameModal, setInitGameModal] = useState(true);
  const [runGame, setRunGame] = useState(false);
  const [lives, setLives] = useState([
    <div key="1" className="live"></div>,
    <div key="2" className="live"></div>,
    <div key="3" className="live"></div>,
    <div key="4" className="live"></div>,
    <div key="5" className="live"></div>,
  ]);

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
    return letrasrandom;
  };

  const extractWord = () => {
    setVictoryModal(false);
    const index = Math.floor(Math.random() * palabras.length);
    setWord(palabras[index].split(""));
    setPistasState(pistas[index]);
    setWordCheck([]);
  };

  const handleGameOver = () => {
    setVictoryModal(false);
    setGameOverModal(true);
  };

  const resetGame = () => {
    setGameOverModal(false);
    setPoints(0);
    extractWord();
    setLives([
      <div key="1" className="live"></div>,
      <div key="2" className="live"></div>,
      <div key="3" className="live"></div>,
      <div key="4" className="live"></div>,
      <div key="5" className="live"></div>,
    ]);
  };

  const initGame = () => {
    setRunGame(true);
    setInitGameModal(false);
    extractWord();
  };

  const deleteWord = () => {
    const arrayCopy = wordCheck.slice();
    arrayCopy.pop();
    setWordCheck(arrayCopy);
  };

  const nextWord = () => {
    let arr = [...lives];
    arr.pop();
    setLives(arr);
    extractWord();
  };

  useEffect(()=>{
    if (lives.length === 0) {
      setGameOverModal(true);
    }
  },[lives]);

  useEffect(() => {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const newpalabra = word.join("") + randomLetters(letras);
    const letrasArray = newpalabra.split("");
    setCardsLetter(mezclar(letrasArray));
  }, [word]);

  useEffect(() => {
    //useEffect de la victoria
    if (word.join("") === wordCheck.join("") && wordCheck.join("") !== "") {
      conffeti();
      setPoints((before) => before + 1);
      setVictoryModal(true);
    }
  }, [wordCheck, word]);

  return (
    <main>
      {initGameModal && (
        <div className="modalInitGame">
          <h1>El juego de palabras</h1>
          <p>suma puntos adivinando las palabras mediante pistas, si te rindes, puedes sacrificar una vida para buscar otra palabra hasta que no te quede ninguna</p>
          <button type="button" onClick={initGame}>
            Empezar
          </button>
        </div>
      )}
      {gameOverModal && (
        <div className="modalGameOver">
          <h1>FIN DEL JUEGO</h1>
          <p>gracias por jugar</p>
          <p>tu puntuacion fue de: {points} palabras acertadas</p>
          <button type="button" onClick={resetGame}>
            Nuevo juego
          </button>
        </div>
      )}
      {victoryModal && (
        <div className="modalVictory">
          <h1>Correcto!!</h1>
          <button className="btnClose" type="button" onClick={handleGameOver}>
            Abandonar
          </button>
          <button className="btnNext" type="button" onClick={extractWord}>
            Siguiente
          </button>
        </div>
      )}
      {runGame && <section>
      <div className="pointsTable">
        <div className="live-container">
        {lives.map((live, index) => (
        <div style={{display: "flex"}} key={index}>
          {live}
        </div>
      ))}
        </div>
        <p>✔: {points}</p>
      </div>
      <div className="Letters">
        {wordCheck.map((letter, index) => (
          <OneLetter key={index} letter={letter} />
        ))}
      </div>
      <p className="pistas">{pistasState}</p>
      <div className="CardsContainer">
        {cardsLetter.map((letter, index) => (
          <Card
            key={index}
            letter={letter}
            letterFromCard={(L) => setWordCheck((before) => [...before, L])}
          />
        ))}
      </div>
      <div className="btnContainer">
        <button type="button" onClick={deleteWord}>
          Borrar
        </button>
        <button type="button" onClick={nextWord}>
          Siguiente palabra -❤
        </button>
      </div>
      </section>}
    </main>
  );
}

export default App;
