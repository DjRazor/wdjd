import React, { useState } from 'react';
import './App.css';
import { questions } from './questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(questions.length).fill(null));
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [correctAnswers, setCorrectAnswers] = useState(Array(questions.length).fill(null));
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizCompleted(false);
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
    } else {
      setQuizCompleted(true);
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

  if (quizCompleted) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz Completed!</h1>
          <p>Your final score: {score} / {questions.length}</p>
          <button onClick={startQuiz}>Restart Quiz</button>
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

        {/* Answered */}
        {answeredQuestions[currentQuestionIndex] !== null && (
          <p>
            You answered: <strong>{selectedAnswers[currentQuestionIndex]}</strong>
            {answeredQuestions[currentQuestionIndex] === false && (
              <div>
                <p>
                  <strong>Correct answer:</strong> {correctAnswers[currentQuestionIndex]}
                </p>
                <p>
                  <strong>Scripture:</strong> {currentQuestion.scripture}
                </p>
                {/* Display the Question to Ponder */}
                {currentQuestion.qtp && (
                  <p>
                    <strong>Question to Ponder:</strong> {currentQuestion.qtp}
                  </p>
                )}
              </div>
            )}
          </p>
        )}

        {/* Unanswered */}
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

        <div className="navigation">
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
            {'<<<'}
          </button>
          <button onClick={goToNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : '>>>'}
          </button>
        </div>

        <p>Score: {score}</p>
      </header>
    </div>
  );
}

export default App;
