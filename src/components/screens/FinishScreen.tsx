import React from "react";

const FinishScreen = ({ onRestart }: FinishScreenProps) => {
  return (
    <div>
      <p>Thank you for taking the quiz!</p>
      <p>Your score is: 4/4</p>
      <h2>LeaderBoard</h2>
      <ol>
        <li>John Doe - 4/4</li>
        <li>Jane Doe - 3/4</li>
        <li>John Smith - 2/4</li>
      </ol>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default FinishScreen;
