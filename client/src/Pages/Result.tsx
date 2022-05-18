import { useEffect } from "react";
import { ResultCard } from "../components/ResultCard/ResultCard";
import { useAuth } from "../context/authcontext";
import { useQuiz } from "../context/quizcontext";
import { updateUserScore } from "../services/authCalls";

export const Result = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { authDispatch, authState } = useAuth();
  useEffect(() => {
    let score: number = 0;

    quizState.optionSelected.forEach((option) => {
      if (option !== undefined && option.isRight) score += 5;
    });
    quizDispatch({
      type: "PRESENT_SCORE",
      payload: score,
    });
    const updateScore = score + authState.score;
    authDispatch({ type: "UPDATE_SCORE", payload: updateScore });
    (async () => {
      await updateUserScore(updateScore);
    })();
  }, []);

  let right = quizState.presentScore / 5;
  let wrong = quizState.optionSelected.length - right;

  return (
    <ResultCard score={quizState.presentScore} right={right} wrong={wrong} />
  );
};
