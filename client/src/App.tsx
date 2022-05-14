import { Routes,Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Homepage from './Pages/Homepage';
import "./App.css";
import { QuizQuestionPage } from './Pages/QuizQuestionPage';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/"element={<Homepage/>}></Route>
        <Route path="/:quizName/:questionNo" element={<QuizQuestionPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
