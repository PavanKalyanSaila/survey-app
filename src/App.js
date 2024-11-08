import React, { useState } from "react";
import "./app.css";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyQuestion from "./components/SurveyQuestion";
import ThankYouScreen from "./components/ThankYouScreen";
import { setSessionCompleted, isSessionCompleted } from "./utils/storage";

const App = () => {
  const [screen, setScreen] = useState(
    isSessionCompleted() ? "thankYou" : "welcome"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startSurvey = () => setScreen("survey");
  const goNext = () => setCurrentQuestion((prev) => prev + 1);
  const goPrev = () => setCurrentQuestion((prev) => prev - 1);

  const submitSurvey = () => {
    setSessionCompleted();
    setScreen("thankYou");
  };

  const restartSurvey = () => {
    localStorage.clear();
    setCurrentQuestion(0);
    setScreen("welcome");
  };

  return (
    <div className="App">
      {screen === "welcome" && <WelcomeScreen onStart={startSurvey} />}
      {screen === "survey" && (
        <SurveyQuestion
          current={currentQuestion}
          onNext={goNext}
          onPrev={goPrev}
          onSubmit={submitSurvey}
        />
      )}
      {screen === "thankYou" && <ThankYouScreen onRestart={restartSurvey} />}
    </div>
  );
};

export default App;
