
import "./styles/game-board.css";
import React, {useContext} from "react";
import { userInputContext } from "../UserInputProvider";

// ! Do not add props to gameboard
export const GameBoard = () => {


  // const [userInput, setUserInput] = useContext(userInputContext)
  // const input = userInput
const obj = useContext(userInputContext)

const input = obj.userInput
const answersLeft = obj.answersLeft
const nextFishToName = answersLeft[0];
if(answersLeft.length < 1){
 return null
}

  return (
    <div id="game-board">
      {input}
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={obj.handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input  onChange={obj.handleInput} value={input} type="text" name="fish-guess" />
        <input type="submit" />
      </form>
    </div>
  );
};