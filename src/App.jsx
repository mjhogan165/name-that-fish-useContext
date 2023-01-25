import React from "react";
import { useContext } from "react";
import "./App.css";
import { FinalScore } from "./Components/FinalScore";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { userInputContext } from "./Components/UserInputProvider";

function App() {
  const {answersLeft } = useContext(userInputContext);
  const gameFinished = answersLeft.length === 0;
  console.log(gameFinished )

  return (
    <div className="App">
      <header>
        {!gameFinished && <ScoreBoard />}
        {!gameFinished && <GameBoard />}
        {gameFinished && <FinalScore />}
      </header>
    </div>
  );
}

export default App;
