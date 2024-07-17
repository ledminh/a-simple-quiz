import React, { useState } from "react";

const TestScreen = ({ onDone }: TestScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const nextIndex = questions.indexOf(currentQuestion) + 1;

    if (nextIndex === questions.length) {
      onDone();
    } else {
      setCurrentQuestion(questions[nextIndex]);
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <h2>{currentQuestion.question}</h2>
      <ul className="flex flex-col gap-3">
        {currentQuestion.options.map((option) => (
          <li key={option}>
            <label className="flex gap-2">
              <input type="radio" name="answer" value={option} />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <div>
        <button type="submit" onClick={handleNext}>
          {questions.indexOf(currentQuestion) === questions.length - 1
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </form>
  );
};

export default TestScreen;

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the capital of Spain?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Madrid",
  },
  {
    id: 3,
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Berlin",
  },
  {
    id: 4,
    question: "What is the capital of England?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "London",
  },
];
