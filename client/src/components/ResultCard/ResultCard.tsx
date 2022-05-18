import "./ResultCard.css";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizcontext";

export const ResultCard = ({
  score,
  right,
  wrong,
}: {
  score: number;
  right: number;
  wrong: number;
}) => {
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="result">
      <div className="score">
        Quiz Score: <span>{score}</span>
      </div>
      <div className="right-wrong">
        <div className="correctly-answered answered-box">
          <AiOutlineCheck style={{ fill: "green" }} />{" "}
          <span className="span-element">{right}</span>
          Correct
        </div>
        <div className="wrongly-answered answered-box">
          <AiOutlineClose style={{ fill: "red" }} />
          <span className="span-element">{wrong}</span> Wrong
        </div>
        <div className="un-answered answered-box">
          <span className="span-element">{5 - (right + wrong)}</span> Not
          Answered
        </div>
      </div>
      <button
        onClick={() => {
          quizDispatch({ type: "RESET" });
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};
