import React, { useState } from "react";
import "./LoadingPage.css";
import { motion } from "framer-motion";

const LoadingPage = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="loading-page">
      {/* Τίτλος με animation */}
      <motion.h1
        className="text-4xl font-bold text-yellow-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Έλα να μάθουμε! ✨
      </motion.h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Το όνομά σου"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="name-input"
        />
        <button type="submit" className="button-enter">
          Start
        </button>
      </form>
    </div>
  );
};

export default LoadingPage;

/**/
