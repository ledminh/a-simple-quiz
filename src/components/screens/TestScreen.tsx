import React from "react";

const TestScreen = ({ onDone }: TestScreenProps) => {
  return (
    <div>
      <h2>TestScreen</h2>
      <button onClick={onDone}>Done</button>
    </div>
  );
};

export default TestScreen;
