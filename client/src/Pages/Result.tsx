import { useEffect } from "react";
import { ResultCard } from "../components/ResultCard/ResultCard";
import { useQuiz } from "../context/quizcontext";

export const Result = () => {
  const { quizState, quizDispatch } = useQuiz();

  useEffect(() => {
    var score: number = 0;

    quizState.optionSelected.forEach((option) => {
      if (option !== undefined && option.isRight) score += 5;
    });
    quizDispatch({
      type: "PRESENT_SCORE",
      payload: score,
    });
  }, []);
  let right = quizState.presentScore / 5;
  let wrong = quizState.optionSelected.length - right;

  return (
    <ResultCard score={quizState.presentScore} right={right} wrong={wrong} />
  );
};
