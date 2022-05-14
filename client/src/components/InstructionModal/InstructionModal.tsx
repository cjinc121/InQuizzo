import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizcontext";
import "./InstructionModal.css";

export default function InstructionModal() {
  const { quizDispatch } = useQuiz();
  const navigate=useNavigate()
  return (
    <div
      className="modal-page"
      onClick={() => quizDispatch({ type: "INSTRUCTION_MODAL" })}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          Rules
          <span
            onClick={() => quizDispatch({ type: "INSTRUCTION_MODAL" })}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className="instruction-list">
          <h4>
            Total Time: <span>1 Mins</span>
          </h4>
          <h4>
            Total Questions: <span>5</span>
          </h4>
          <h4>
            Poistive Points: <span>5 Points</span>
          </h4>
          <h4>
            Total Points: <span>12 Points</span>
          </h4>
          <h4>
            Difficulty: <span>Medium</span>
          </h4>
          <h4>There is no negative points</h4>
        </div>
        <button
          onClick={() => {
            quizDispatch({ type: "INSTRUCTION_MODAL" });
             navigate("/question");
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
