import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Education from "./Education";
import Questions from "./Questions";
import Modal from "./Modal";
import LoadingPage from "./LoadingPage";
import questionsSet1 from "./questionsSet1";
import questionsSet2 from "./questionsSet2";

const allQuestions = [...questionsSet1, ...questionsSet2];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [hints, setHints] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [lockedQuestions, setLockedQuestions] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const shuffledQuestions = shuffleArray(allQuestions);
    setQuestions(shuffledQuestions);
    setHints(Array(shuffledQuestions.length).fill(false));
    setLockedQuestions(Array(shuffledQuestions.length).fill(false));
  }, []);

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
    const shuffledQuestions = shuffleArray(allQuestions);
    setQuestions(shuffledQuestions);
    setHints(Array(shuffledQuestions.length).fill(false));
    setAnsweredQuestions(0);
    setLockedQuestions(Array(shuffledQuestions.length).fill(false));
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
    <Router>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route
              path="/questions"
              element={
                isLoading ? (
                  <LoadingPage onSubmit={handleStartTest} />
                ) : isTestCompleted ? (
                  <div className="congratulations-section">
                    <h1>Congratulations, {studentName}!</h1>
                    <button onClick={handleRedoTest}>Redo the Test</button>
                  </div>
                ) : (
                  <Questions
                    questions={questions}
                    handleAnswerClick={handleAnswerClick}
                    lockedQuestions={lockedQuestions}
                    progressPercentage={progressPercentage}
                  />
                )
              }
            />
          </Routes>
        </div>
        {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
