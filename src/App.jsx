import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import UserInputProvider from './UserInputProvider'



function App() {



  

  return (
    <div className="App">
      <header>
        <UserInputProvider>
          <ScoreBoard />
          <GameBoard />
        </UserInputProvider>
      </header>
    </div>
  );
}

export default App;
