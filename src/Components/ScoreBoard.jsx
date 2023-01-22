import "./styles/score-board.css";
import React, {useContext} from "react";
import { userInputContext } from "../App";
//  Where the score is presented


// ! do not add props to scoreboard
export const ScoreBoard = () => {

  const obj = useContext(userInputContext);

  const incorrectCount = obj.incorrectCount;

  const answersLeft = obj.answersLeft;
  console.log(answersLeft);
  const correctCount = obj.correctCount;


  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};