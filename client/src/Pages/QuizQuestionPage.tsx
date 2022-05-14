import { useParams } from "react-router-dom"
import { QuestionCard } from "../components/QuestionCard/QuestionCard"

export const QuizQuestionPage=()=>{
  const {quizName,questionNo}=useParams()
return <div><QuestionCard quizName={quizName!} questionNumber={+questionNo!}/></div>
}
