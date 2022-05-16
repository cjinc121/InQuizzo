import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { QuizQuestionPage } from "./Pages/QuizQuestionPage";
import { Result } from "./Pages/Result";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/quiz/:quizName/:questionNo"
          element={<QuizQuestionPage />}
        ></Route>
        <Route path="/quiz/:quizName/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
