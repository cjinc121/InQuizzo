import { QuizAction, QuizInitialState } from "../services/types";

const quizInitialState:QuizInitialState={
  quizzes: [],
  currentQuizScore: 0,
  optionSelected: JSON.parse(localStorage.getItem("optionSelected")!) || [],
  userAnswer: {
    right: 0,
    wrong: 0,
  },
  showAnswer: false,
  timer: 10,
  instructionModal: false,
  quizToPlay: "",
}
const quizReducer=(state:QuizInitialState,action:QuizAction):QuizInitialState=>{
switch(action.type){
  case "INSTRUCTION_MODAL":
    return {...state,instructionModal:!state.instructionModal}
    
  default:
    return state
}

}

export {quizInitialState,quizReducer}