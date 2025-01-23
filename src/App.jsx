import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import LoadingPage from "./LoadingPage";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
    hint: "It's known as the city of love.",
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
    hint: "He is also the founder of SpaceX.",
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
    hint: "Think of a fruit.",
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
    hint: "It's more than 6 but less than 8.",
  },
];

function App() {
  const [hints, setHints] = useState(Array(questions.length).fill(false));
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [lockedQuestions, setLockedQuestions] = useState(
    Array(questions.length).fill(false)
  );
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [studentName, setStudentName] = useState("");

  const handleAnswerClick = (isCorrect, index) => {
    if (!isCorrect) {
      setModalMessage(`Hint: ${questions[index].hint}`);
      setIsModalOpen(true);
      setHints((prevHints) => {
        const newHints = [...prevHints];
        newHints[index] = true;
        return newHints;
      });
    } else {
      setModalMessage("Good job! Keep going!");
      setIsModalOpen(true);
      setLockedQuestions((prevLocked) => {
        const newLocked = [...prevLocked];
        newLocked[index] = true;
        return newLocked;
      });
      setAnsweredQuestions((prevAnswered) => {
        const newAnswered = prevAnswered + 1;
        if (newAnswered === questions.length) {
          setIsTestCompleted(true);
        }
        return newAnswered;
      });
    }
  };

  const handleRedoTest = () => {
    setHints(Array(questions.length).fill(false));
    setAnsweredQuestions(0);
    setLockedQuestions(Array(questions.length).fill(false));
    setIsTestCompleted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStartTest = (name) => {
    setStudentName(name);
    setIsLoading(false);
  };

  const progressPercentage = (answeredQuestions / questions.length) * 100;

  return (
    <div className="app">
      {isLoading ? (
        <LoadingPage onSubmit={handleStartTest} />
      ) : isTestCompleted ? (
        <div className="congratulations-section">
          <h1>Congratulations, {studentName}!</h1>
          <button onClick={handleRedoTest}>Redo the Test</button>
        </div>
      ) : (
        <>
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
        </>
      )}
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}

export default App;
