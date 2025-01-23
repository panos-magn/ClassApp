import React from "react";

const Question = ({ question, index, handleAnswerClick, locked }) => (
  <div className="question-section">
    <div className="question-count">
      <span>Question {index + 1}</span>/{question.length}
    </div>
    <div className="question-text">{question.questionText}</div>
    <div className="answer-section">
      {question.answerOptions.map((answerOption, answerIndex) => (
        <button
          key={answerIndex}
          onClick={() =>
            !locked && handleAnswerClick(answerOption.isCorrect, index)
          }
          disabled={locked}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>
  </div>
);

export default Question;
