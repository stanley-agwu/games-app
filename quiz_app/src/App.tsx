import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty } from './API';

const App = () => {
  const TOTAL_QUESTIONS = 10;
  const [loading, setLoading ] = useState(false);
  const [ questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

  const startAPIcall = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start" onClick={startAPIcall}>
        Start Quiz
      </button>
      <p className="score">Score: </p>
      <p className="loading">Loading Questions ...</p>
      {/* <QuestionCard 
        questionNr = {number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
