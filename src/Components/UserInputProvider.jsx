import React from "react";
import { useState } from "react";
import { initialFishes } from "../constants";

import PropTypes from "prop-types";


export const userInputContext = React.createContext();

export function UserInputProvider({ children }) {

  const [userInput, setUserInput] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    let correctFish = answersLeft[0].name;
    let isCorrect = userInput.toLowerCase() === correctFish.toLowerCase();

    setAnswersLeft(answersLeft.filter((x) => x.name !== correctFish));

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setUserInput("");
  }

  const obj = {
    handleInput: handleInput,
    handleSubmit: handleSubmit,
    userInput: userInput,
    answersLeft: answersLeft,
    correctCount: correctCount,
    incorrectCount: incorrectCount,
  };

  UserInputProvider.propTypes = {
    children: PropTypes.func,
  };

  return (
    <userInputContext.Provider value={obj}>
      {children}
    </userInputContext.Provider>
  );
}
