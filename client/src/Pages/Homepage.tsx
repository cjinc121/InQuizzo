import React from 'react'
import { useNavigate } from 'react-router-dom';
import InstructionModal from '../components/InstructionModal/InstructionModal';
import { CategoryCard } from '../components/QuizCategoryCard/CategoryCard'
import { useQuiz } from '../context/quizcontext';

function Homepage() {
  const {quizState}=useQuiz();

  return (
    <div>
      {
quizState.instructionModal&& <InstructionModal/>
      }
      <CategoryCard/>
      </div>
  )
}

export default Homepage