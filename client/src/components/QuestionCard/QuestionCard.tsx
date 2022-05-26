import { RiTimerFlashLine } from "react-icons/ri";
import "./QuestionCard.css";
import { FcNext } from "react-icons/fc";
import { AiTwotoneHome } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useQuiz } from "../../context/quizcontext";
import { useNavigate } from "react-router-dom";
import { Option, Question, Quiz } from "../../services/types";
import { getAllQuiz } from "../../services/quizCalls";

export const QuestionCard = ({
  quizName,
  questionNumber,
}: {
  quizName: string;
  questionNumber: number;
}) => {
  const { quizState, quizDispatch } = useQuiz();
  const { questions } = quizState;
  const [selected, setSelected] = useState("");
  const [optionselected, setOptionselected] = useState(false);

  const result = questions[questionNumber];
  const navigate = useNavigate();
  function increaseQuestionNumber(n: number): number | string {
    if (n < 4) {
      return (n += 1);
    }
    return "result";
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
    setOptionselected(false);
  }, [questionNumber, quizDispatch]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (quizState.timer > 0) {
      if (!optionselected) {
        timeout = setTimeout(
          () =>
            quizDispatch({ type: "SET_TIMER", payload: quizState.timer - 1 }),
          1000
        );
      }
    } else {
      quizDispatch({ type: "SET_TIMER", payload: 10 });
      navigate(`/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [quizState.timer, navigate, questionNumber, quizName, quizDispatch]);
  useEffect(() => {
    (async () => {
      const { quiz, success } = await getAllQuiz();
      const quizData2: Question[] = quiz.find((quiz: Quiz) => {
        if (quiz.quizName === quizName) return quiz;
      })!.questions;
      if (success) quizDispatch({ type: "LOAD_QUESTION", payload: quizData2 });
    })();
  }, []);
  return (
    <div className="question-container">
      {result && (
        <>
          <div className="utility-icons">
            <div className="timer">
              <RiTimerFlashLine />
              <span>{quizState.timer}</span>
            </div>
            <div className="question-number">Q{result.questionNumber}/5</div>
            <div className="icon">
              <VscDebugRestart
                onClick={() => {
                  setOptionselected(false);
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
              <FcNext
                className="next-icon"
                onClick={() => {
                  quizDispatch({ type: "SHOW_ANSWER", payload: false });
                  navigate(
                    `/quiz/${quizName}/${increaseQuestionNumber(
                      questionNumber
                    )}`
                  );
                }}
              />
            </div>
          </div>

          <div className="question">{result.question}</div>
          <div className="options-container">
            {result.options.map((option) => {
              return (
                <div
                  key={option.value}
                  className="option"
                  style={
                    optionselected &&
                    (option.isRight === true || option.value === selected)
                      ? buttonColor(quizState.showAnswer, option)
                      : {}
                  }
                  onClick={() => {
                    if (!optionselected) {
                      setSelected(option.value);
                      quizDispatch({
                        type: "OPTION_SELECTED",
                        payload: { questionNo: questionNumber, option: option },
                      });
                      quizDispatch({ type: "SHOW_ANSWER", payload: true });
                      setOptionselected(true);
                    }
                  }}
                >
                  {option.value}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
