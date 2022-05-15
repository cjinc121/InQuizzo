import { RiTimerFlashLine } from "react-icons/ri";
import "./QuestionCard.css";
import { GrLinkNext } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useQuiz } from "../../context/quizcontext";
import { useNavigate } from "react-router-dom";
import { Option, Question, Quiz } from "../../services/types";

export const QuestionCard = ({
  quizName,
  questionNumber,
}: {
  quizName: string;
  questionNumber: number;
}) => {
  const { quizState, quizDispatch } = useQuiz();
  const { quizzes } = quizState;
  const [selected, setSelected] = useState("");
  const quizData: Question[] = quizzes.find(
    (quiz: Quiz) => quiz.quizName === quizName
  )!.questions;
  const result = quizData[questionNumber];
  const navigate = useNavigate();
  function increaseQuestionNumber(n: number): number | string {
    if (n < 4) return (n += 1);
    return "result";
  }
  function QuizScore(
    presentScore: number,
    question: Question,
    optionSelected: Option
  ): number {
    return optionSelected.isRight
      ? presentScore + question.points
      : presentScore;
  }
  function buttonColor(showAnswer: boolean, option: Option) {
    if (showAnswer) {
      if (option.isRight) return { backgroundColor: "lightgreen" };
      else return { backgroundColor: "crimson" };
    }
  }

  useEffect(() => {
    quizDispatch({ type: "SHOW_ANSWER", payload: false });
    if (questionNumber < 5) quizDispatch({ type: "SET_TIMER", payload: 10 });
  }, [questionNumber, quizDispatch]);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (quizState.timer > 0) {
      timeout = setTimeout(
        () => quizDispatch({ type: "SET_TIMER", payload: quizState.timer - 1 }),
        1000
      );
    } else {
      navigate(`/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [quizState.timer, navigate, questionNumber, quizDispatch]);
  return (
    <div className="question-container">
      <div className="utility-icons">
        <div className="timer">
          <RiTimerFlashLine />
          <span>{quizState.timer}</span>
        </div>
        <div className="question-number">Q{result.questionNumber}/5</div>
        <div className="icon">
          <VscDebugRestart
            onClick={() => {
              quizDispatch({ type: "RESET" });
              quizDispatch({ type: "SHOW_ANSWER", payload: false });
              navigate(`/quiz/${quizName}/${0}`);
            }}
          />
          <AiTwotoneHome
            onClick={() => {
              quizDispatch({ type: "RESET" });
              navigate(`/`);
            }}
          />
          <GrLinkNext
            onClick={() =>
              navigate(
                `/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`
              )
            }
          />
        </div>
      </div>

      <div className="question">{result.question}</div>
      <div className="options-container">
        {result.options.map((option) => {
          return (
            <div
              className="option"
              style={
                option.isRight || option.value === selected
                  ? buttonColor(quizState.showAnswer, option)
                  : {}
              }
              onClick={() => {
                setSelected(option.value);
                quizDispatch({
                  type: "OPTION_SELECTED",
                  payload: { questionNo: questionNumber, option: option },
                });
                quizDispatch({ type: "SHOW_ANSWER", payload: true });
              }}
            >
              {option.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
