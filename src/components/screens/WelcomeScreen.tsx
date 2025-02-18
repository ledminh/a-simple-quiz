import React from "react";

const WelcomeScreen = ({
  onStart,
  name,
  setName,
  numQuestions,
}: WelcomeScreenProps) => {
  const [error, setError] = React.useState<boolean>(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (name.length === 0) {
      setError(true);
    } else {
      setError(false);
      onStart();
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <h2>Welcome to Simple Quiz</h2>
      <div className="flex flex-col gap-4">
        <p>
          You will be presented with {numQuestions} multiple choices questions.
        </p>
        <p>Can you score 100%?</p>
        <p>Enter your name and click to start the quiz</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-600 p-2 rounded-md"
          />
          <button onClick={onClick}>Begin</button>
        </div>
        {error && <p className="text-red-600">Please enter your name</p>}
      </div>
    </form>
  );
};

export default WelcomeScreen;
