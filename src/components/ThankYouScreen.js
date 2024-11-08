import React, { useEffect } from "react";
import "../app.css";

const ThankYouScreen = ({ onRestart }) => {
  useEffect(() => {
    const timer = setTimeout(onRestart, 5000);
    return () => clearTimeout(timer);
  }, [onRestart]);

  return (
    <div className="thank-you-screen">
      <h1>Thank you for your time!</h1>
      <p>Redirecting to the welcome screen...</p>
    </div>
  );
};

export default ThankYouScreen;
