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
  presentScore: number;
  optionSelected: Option[] | [];
  showAnswer: boolean;
  timer: number;
  instructionModal: boolean;
  quizToPlay: string;
};

export type QuizAction =
  | { type: "RESET" }
  | {
      type: "PRESENT_SCORE";
      payload: number;
    }
  | { type: "OPTION_SELECTED"; payload: { questionNo: number; option: Option } }
  | { type: "SHOW_ANSWER"; payload: boolean }
  | { type: "SET_TIMER"; payload: number }
  | { type: "LOAD_QUIZ"; payload: [] }
  | { type: "INSTRUCTION_MODAL" }
  | { type: "QUIZ_TO_PLAY"; payload: string };

export type QuizContextType = {
  quizState: QuizInitialState;
  quizDispatch: (action: QuizAction) => void;
};
