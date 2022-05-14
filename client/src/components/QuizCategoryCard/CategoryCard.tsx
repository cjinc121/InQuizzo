import "./CategoryCard.css"
import icon from "../../assets/geo.jpg"
import { useQuiz } from "../../context/quizcontext"
const CategoryCard=()=>{
const {quizDispatch}=useQuiz();
return <div className="category-container">
<div className="category-card">
  <div className="category-image">
    <img src={icon} alt="category-thumbnail"  />
  </div>
  <div className="category-info">
    <h4>Category Name </h4>
  </div>
  <button className="category-button">Start Quiz</button>

</div>
<div className="category-card">
  <div className="category-image">
    <img src={icon} alt="category-thumbnail"  />
    
  </div>
  <div className="category-info">
    <h4>Category Name </h4>
  </div>
  <button className="category-button" onClick={()=>quizDispatch({type:"INSTRUCTION_MODAL"})}>Start Quiz</button>
</div>
</div>
}
export {CategoryCard}