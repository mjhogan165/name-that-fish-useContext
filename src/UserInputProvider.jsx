import { useState, React } from "react";
import { createContext } from "react";
import { Images } from "./assets/images";
import { useContext } from "react";

export const userInputContext= React.createContext();

const UserInputProvider = (props) => {
    const initialFishes = [
      {
        name: "trout",
        url: Images.trout,
      },
      {
        name: "salmon",
        url: Images.salmon,
      },
      {
        name: "tuna",
        url: Images.tuna,
      },
      {
        name: "shark",
        url: Images.shark,
      },
    ];
    
    const [userInput, setUserInput] = useState('')
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [answersLeft, setAnswersLeft] = useState(initialFishes);
    
  
  
    const handleInput = (e) => {
      setUserInput(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      let correctFish = answersLeft[0].name;
      let isCorrect = userInput.toLowerCase() === correctFish.toLowerCase()
      console.log({correct: correctFish, correctCount: correctCount, incorrectCount: incorrectCount, isCorrect: isCorrect});
  
      setAnswersLeft(answersLeft.filter((x) => x.name !== correctFish));
  
      if (isCorrect) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
      }
      setUserInput("");
    };
  
    const obj ={
      handleInput: handleInput,
      handleSubmit: handleSubmit,
      userInput: userInput,
      answersLeft: answersLeft,
      correctCount: correctCount,
      incorrectCount: incorrectCount
    }
  
    return (
      <userInputContext.Provider value={obj}>
          {children}
      </userInputContext.Provider >
    )
  }

  export default UserInputProvider;