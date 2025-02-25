import React from "react";
import "../app.css";

const WelcomeScreen = ({ onStart }) => (
  <div className="welcome-screen">
    <h1>Welcome to Our Survey</h1>
    <button onClick={onStart}>Start Survey</button>
  </div>
);

export default WelcomeScreen;
