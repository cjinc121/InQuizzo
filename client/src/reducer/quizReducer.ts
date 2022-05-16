import { QuizAction, QuizInitialState } from "../services/types";

const quizInitialState: QuizInitialState = {
  quizzes: [],
  presentScore: 0,
  optionSelected: [],
  showAnswer: false,
  timer: 10,
  instructionModal: false,
  quizToPlay: "",
};
const quizReducer = (
  state: QuizInitialState,
  action: QuizAction
): QuizInitialState => {
  switch (action.type) {
    case "INSTRUCTION_MODAL":
      return { ...state, instructionModal: !state.instructionModal };
    case "LOAD_QUIZ":
      return { ...state, quizzes: action.payload };
    case "QUIZ_TO_PLAY":
      return { ...state, quizToPlay: action.payload };
    case "SET_TIMER":
      return { ...state, timer: action.payload };
    case "SHOW_ANSWER":
      return { ...state, showAnswer: action.payload };
    case "OPTION_SELECTED":
      var newSelection = [...state.optionSelected];
      newSelection[action.payload.questionNo] = action.payload.option;
      return {
        ...state,
        optionSelected: newSelection,
      };
    case "PRESENT_SCORE":
      return { ...state, presentScore: action.payload };
    case "RESET":
      return { ...state, presentScore: 0, optionSelected: [] };
    default:
      return state;
  }
};

export { quizInitialState, quizReducer };
