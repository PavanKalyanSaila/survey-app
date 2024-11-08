import React, { useState } from "react";
import "../app.css";
import { saveAnswer, getAnswers } from "../utils/storage";
import questions from "../data/questions";

const SurveyQuestion = ({ current, onNext, onPrev, onSubmit }) => {
  const [answer, setAnswer] = useState(
    getAnswers()[questions[current].id] || ""
  );

  const handleAnswerChange = (e) => setAnswer(e.target.value);

  const handleNext = () => {
    saveAnswer(questions[current].id, answer);
    onNext();
  };

  const handlePrev = () => {
    saveAnswer(questions[current].id, answer);
    onPrev();
  };

  return (
    <div className="survey-container">
      <h2>
        Question {current + 1}/{questions.length}
      </h2>
      <p>{questions[current].text}</p>

      {questions[current].type === "rating" && (
        <input
          type="number"
          min="1"
          max={questions[current].scale}
          value={answer}
          onChange={handleAnswerChange}
        />
      )}
      {questions[current].type === "text" && (
        <textarea value={answer} onChange={handleAnswerChange}></textarea>
      )}

      <div className="button-container">
        {current > 0 && (
          <button className="prev" onClick={handlePrev}>
            Previous
          </button>
        )}
        {current < questions.length - 1 ? (
          <button className="next" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="next" onClick={onSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestion;
