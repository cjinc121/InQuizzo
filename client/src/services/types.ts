export type Option = {
  value: string;
  isRight: boolean;
};

export type Question = {
  questionNumber: number;
  question: string;
  points: number;
  negativePoints: number;
  options: Option[];
};

export type Quiz = {
  quizName: string;
  quizImage?: string;
  questions: Question[];
};
export type Children = { children: React.ReactElement };

export type QuizInitialState = {
  quizzes: Quiz[];
  currentQuizScore: number;
  optionSelected: Option[] | [];
  userAnswer: {
    right: number;
    wrong: number;
  };
  showAnswer: boolean;
  timer: number;
  instructionModal: boolean;
  quizToPlay: string;
};

export type QuizAction =
  | { type: "RESET" }
  | {
      type: "CURRENT_QUIZ_SCORE";
      payload: { question: Question; option: Option };
    }
  | { type: "SELECTED_OPTION"; payload: Option }
  | { type: "CLEAR_OPTIONS" }
  | { type: "RIGHT_WRONG" }
  | { type: "SHOW_ANSWER"; payload: boolean }
  | { type: "SET_TIMER"; payload: number }
  | { type: "LOAD_QUIZ"; payload: [] }
  | { type: "INSTRUCTION_MODAL" }
  | { type: "QUIZ_TO_PLAY"; payload: string };

export type QuizContextType = {
  quizState: QuizInitialState;
  quizDispatch: (action: QuizAction) => void;
};
