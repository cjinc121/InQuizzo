import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { QuizQuestionPage } from "./Pages/QuizQuestionPage";
import { Result } from "./Pages/Result";
import { LoginPage } from "./Pages/AuthPage/Loginpage";
import SignUpPage from "./Pages/AuthPage/SignUpPage";
import { Profile } from "./Pages/AuthPage/Profile";
import { PrivateRoute } from "./Route/PrivateRoute";
import { Leaderboard } from "./Pages/LeaderBoard/Leaderboard";
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
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
