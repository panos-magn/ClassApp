import React from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const Questions = ({
  questions,
  handleAnswerClick,
  lockedQuestions,
  progressPercentage,
}) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          index={index}
          handleAnswerClick={handleAnswerClick}
          locked={lockedQuestions[index]}
        />
      ))}
      <ProgressBar progress={progressPercentage} />
    </div>
  );
};

export default Questions;
