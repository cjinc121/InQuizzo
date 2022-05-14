import { useReducer, createContext, useContext, useEffect } from "react";
import { Children, QuizContextType } from "../services/types";
import { quizReducer, quizInitialState } from "../reducer/quizReducer";

export const QuizContext = createContext<QuizContextType>(
  {} as QuizContextType
);
export const useQuiz=()=>useContext(QuizContext);
export const QuizContextProvider = ({ children }: Children) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);

  useEffect(() => {
    localStorage.setItem(
      "optionSelected",
      JSON.stringify(quizState.optionSelected)
    );
  }, [quizState.optionSelected]);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

