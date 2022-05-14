import {RiTimerFlashLine} from "react-icons/ri"
import "./QuestionCard.css"
import {GrLinkNext} from "react-icons/gr"
import {AiTwotoneHome} from "react-icons/ai"
import {VscDebugRestart} from "react-icons/vsc"
import { useEffect } from "react"
import { useQuiz } from "../../context/quizcontext"
import { useNavigate } from "react-router-dom"
export const QuestionCard=({quizName,questionNumber}:{quizName:string,questionNumber:number})=>{
const {quizState,quizDispatch}=useQuiz();
const navigate=useNavigate();

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout;
  //   if (quizState.timer > 0) {
  //     timeout = setTimeout(
  //       () => quizDispatch({ type: "SET_TIMER", payload: quizState.timer - 1 }),
  //       1000
  //     );
  //   } else {
  //     navigate(`/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`);
  //   }
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [quizState.timer, navigate, questionNumber, quizName, quizDispatch]);
return <div className="question-container">
  <div className="utility-icons"> 
  <div className="timer"><RiTimerFlashLine/><span>10</span></div>
  <div className="question-number">{questionNumber+1}/5</div>
  <div className="icon"><VscDebugRestart/><AiTwotoneHome/><GrLinkNext/></div>
  </div>
 
<div className="question"> Which country is not a part of QUAD ?</div>
<div className="options-container">
<div className="option">1.Pakistan</div>
<div className="option">2.INDIA</div>
<div className="option">3.UNITED STATES OF AMERICA</div>
<div className="option">4.AUSTRALIA</div>
</div>
</div>
}