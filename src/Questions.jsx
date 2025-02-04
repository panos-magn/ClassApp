import React, { useState } from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const Questions = ({
  questions,
  handleAnswerClick,
  lockedQuestions,
  progressPercentage,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleAnswerClickWithNavigation = (isCorrect, index) => {
    handleAnswerClick(isCorrect, index);
    if (isCorrect) {
      handleNextQuestion();
    }
  };

  return (
    <div className="questions-container">
      <ProgressBar progress={progressPercentage} />

      <Question
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex}
        handleAnswerClick={handleAnswerClickWithNavigation}
        locked={lockedQuestions[currentQuestionIndex]}
      />

      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="nav-button"
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Questions;
