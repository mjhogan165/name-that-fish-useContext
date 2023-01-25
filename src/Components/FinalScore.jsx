import React from "react";
import { userInputContext } from "./UserInputProvider";
import { useContext } from "react";


export function FinalScore() {
  const { answersLeft, correctCount, incorrectCount } = useContext(userInputContext);
  if (answersLeft.length > 0) {
    return null;
  }
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{correctCount + incorrectCount}</p>
      </div>
    </div>
  );
}

export default FinalScore;
