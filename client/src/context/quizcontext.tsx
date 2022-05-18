import { useReducer, createContext, useContext, useEffect } from "react";
import { Children, QuizContextType } from "../services/types";
import { quizReducer, quizInitialState } from "../reducer/quizReducer";
import { getAllQuiz } from "../services/quizCalls";

export const QuizContext = createContext<QuizContextType>(
  {} as QuizContextType
);
export const useQuiz = () => useContext(QuizContext);
export const QuizContextProvider = ({ children }: Children) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);
  useEffect(() => {
    (async () => {
      const { quiz, success } = await getAllQuiz();
      if (success) quizDispatch({ type: "LOAD_QUIZ", payload: quiz });
    })();
  }, []);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
