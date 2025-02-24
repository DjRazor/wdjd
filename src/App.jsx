import React, { useState } from 'react';
import './App.css';
import { questions } from './questions';
//import { Header } from './header';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(questions.length).fill(null)
  );
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [correctAnswers, setCorrectAnswers] = useState(Array(questions.length).fill(null));
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(Array(questions.length).fill(null));
    setSelectedAnswers(Array(questions.length).fill(null));
    setCorrectAnswers(Array(questions.length).fill(null));
  };

  const handleAnswer = (index) => {
    if (answeredQuestions[currentQuestionIndex] !== null) return;

    const isCorrect = index === questions[currentQuestionIndex].correct;

    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].options[index];
    setSelectedAnswers(updatedSelectedAnswers);

    const updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers[currentQuestionIndex] = questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct];
    setCorrectAnswers(updatedCorrectAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[currentQuestionIndex] = isCorrect;
    setAnsweredQuestions(updatedAnsweredQuestions);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!quizStarted) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to What Did Jesus Do quiz!</h1>
          <p>Test your knowledge about the life and teachings of Jesus.</p>
          <button onClick={startQuiz}>Start Quiz</button>
        </header>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <header className="App-header">
        <h1>What Did Jesus Do?</h1>
        <p>{currentQuestion.question}</p>

        {answeredQuestions[currentQuestionIndex] !== null && (
          <p>
            You answered: <strong>{selectedAnswers[currentQuestionIndex]}</strong>
            {answeredQuestions[currentQuestionIndex] === false && (
              <p>
                <strong>Correct answer:</strong> {correctAnswers[currentQuestionIndex]}
              </p>
            )}
          </p>
        )}

        {answeredQuestions[currentQuestionIndex] === null && (
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answeredQuestions[currentQuestionIndex] !== null}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {answeredQuestions[currentQuestionIndex] !== null && (
          <p className="scripture">{currentQuestion.scripture}</p>
        )}

        <div className="navigation">
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
            {'<<<'}
          </button>
          <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
            {'>>>'}
          </button>
        </div>

        <p>Score: {score}</p>
      </header>
    </div>
  );
}

export default App;
