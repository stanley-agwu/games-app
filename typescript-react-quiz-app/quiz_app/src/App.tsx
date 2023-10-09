import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles';
import { fetchQuizQuestions, Difficulty } from './API';
import { AnswerObject, QuestionState } from './types';

const App: React.FC = () => {
  const TOTAL_QUESTIONS: number = 10;

  const [loading, setLoading ] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startAPIcall = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          Difficulty.EASY
      )

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
          const answer = e.currentTarget.value;
          const isCorrect = questions[number].correct_answer === answer;
          isCorrect && setScore((prevScore) => prevScore + 10);
          const answerObject = {
          question: questions[number].question,
          answer,
          isCorrect,
          correctAnswer: questions[number].correct_answer
          };
          setUserAnswers((prevAnswers) => [...prevAnswers, answerObject]);
      }
  }

  const nextQuestion = () => {
      const nextQuestion = number + 1;
      nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQuestion);
  }

  return (
    <>
      <GlobalStyle />
        <Wrapper>
          <h1>QUIZ APP</h1>
          { (gameOver || userAnswers.length === TOTAL_QUESTIONS) 
              && (
              <button className="start" onClick={startAPIcall}>
                Start Quiz
              </button>
                  )
          }
          { !gameOver && <p className="score">Score: {score}</p> }
          { loading && <p className="loading">Loading Questions ...</p> }
          { !loading && !gameOver
              && (
                    <QuestionCard 
                      questionNr = {number + 1}
                      totalQuestions={TOTAL_QUESTIONS}
                      question={questions[number].question}
                      answers={questions[number].answers}
                      userAnswer={userAnswers ? userAnswers[number] : undefined}
                      callback={checkAnswer}
                    />
                  )
          }
          { !loading && !gameOver && userAnswers.length === number + 1 && number < TOTAL_QUESTIONS - 1
              && (
                    <button className="next" onClick={nextQuestion}>
                      Next Question
                    </button>
                  )
          }
        </Wrapper>
    </>
  );
}

export default App;
