import React, { useState } from "react";

const TestScreen = ({
  onDone,
  questions,
  onUpdateResponse,
}: TestScreenProps) => {
  // STATES
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const [error, setError] = useState<boolean>(false);

  // FUNCTIONS

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setError(false);

    // Check and adjust score
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    ) as HTMLInputElement | null;

    if (selectedOption === null) {
      setError(true);
      return;
    }

    const response = selectedOption.value;

    // Update response
    onUpdateResponse(currentQuestion, response);

    // Move to next question or finish
    const nextIndex = questions.indexOf(currentQuestion) + 1;

    if (nextIndex === questions.length) {
      onDone();
    } else {
      setCurrentQuestion(questions[nextIndex]);
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <p>
        Question {questions.indexOf(currentQuestion) + 1}/{questions.length}
      </p>
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
      {error && <p className="text-red-600">Please select an answer</p>}
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
