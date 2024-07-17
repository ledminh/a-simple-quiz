import React from "react";

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <form>
      <h2>Welcome to Simple Quiz</h2>
      <p>You will be presented with 4 multiple choices questions.</p>
      <p>Can you score 100%?</p>
      <p>Enter your name and click to start the quiz</p>
      <input type="text" placeholder="Enter your name" />
      <button onClick={onStart}>Begin</button>
    </form>
  );
};

export default WelcomeScreen;
