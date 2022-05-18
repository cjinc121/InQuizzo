import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { useQuiz } from "../../context/quizcontext";
import "./InstructionModal.css";

export default function InstructionModal() {
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <div
      className="modal-page"
      onClick={() => quizDispatch({ type: "INSTRUCTION_MODAL" })}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          Rules
          <span onClick={() => quizDispatch({ type: "INSTRUCTION_MODAL" })}>
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
            Total Points: <span>25 Points</span>
          </h4>
          <h4>
            Difficulty: <span>Medium</span>
          </h4>
          <h5>There is no negative points</h5>
          {authState.userId === "" && <h5>Login to be on Leaderboard</h5>}
        </div>
        <button
          onClick={() => {
            quizDispatch({ type: "INSTRUCTION_MODAL" });
            navigate(quizState.quizToPlay);
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
