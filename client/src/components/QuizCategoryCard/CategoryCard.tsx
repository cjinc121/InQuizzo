import "./CategoryCard.css"
import { useQuiz } from "../../context/quizcontext"
const CategoryCard=()=>{
const {quizState,quizDispatch}=useQuiz();
const {quizzes}=quizState
const start=0;
return <div className="category-container">
{
  quizzes.map((quiz)=>{
return<div className="category-card">
<div className="category-image">
  <img src={quiz.quizImage} alt="category-thumbnail"  />
  
</div>
<div className="category-info">
  <h4>{quiz.quizName} </h4>
</div>
<button className="category-button" onClick={
  ()=>{quizDispatch({type:"INSTRUCTION_MODAL"});
  quizDispatch({type:"QUIZ_TO_PLAY",payload:`/quiz/${quiz.quizName}/${start}`})
  }}>
  Start Quiz
  </button>
</div>
  })
}

</div>
}
export {CategoryCard}