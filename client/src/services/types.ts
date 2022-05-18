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
export type userType = {
  _id: string;
  name: string;
  email: string;
  role: string;
  score: number;
};
export type AuthInitialStateType = {
  userId: string | null;
  userName: string;
  score: number;
};

export type AuthActionType =
  | { type: "CREATE_SESSION"; payload: userType }
  | { type: "START_SESSION"; payload: userType }
  | { type: "END_SESSION" }
  | { type: "UPDATE_SCORE"; payload: number };

export type AuthContextType = {
  authState: AuthInitialStateType;
  authDispatch: (action: AuthActionType) => void;
  loginHandler: (email: string, password: string) => void;
  signupHandler: (name: string, email: string, password: string) => void;
  signoutHandler: () => void;
};
