import React, { useState } from "react";
import "./LoadingPage.css";

const LoadingPage = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="loading-page">
      <h1>Welcome to the Quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default LoadingPage;
