import "./styles/game-board.css";
import React, { useContext } from "react";
import { userInputContext } from "./UserInputProvider";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { userInput, answersLeft, handleInput, handleSubmit } =
    useContext(userInputContext);
  const nextFishToName = answersLeft[0];
  if (answersLeft.length < 1) {
    return null;
  }

  return (
    <div id="game-board">
      {userInput}
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          onChange={handleInput}
          value={userInput}
          type="text"
          name="fish-guess"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
