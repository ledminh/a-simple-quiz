import React from "react";

const FinishScreen = ({ onRestart }: FinishScreenProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p>Thank you for taking the quiz!</p>
        <p>
          Your score is:{" "}
          <span className="text-red-800 font-bold text-lg">100%</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 bg-gray-300 p-4 rounded-md">
        <h2>Leader Board</h2>
        <ol>
          {LeaderBoardData.map((data, i) => (
            <li key={data.id}>
              {i + 1} - {data.name} - {data.score}%
            </li>
          ))}
        </ol>
      </div>
      <div>
        <button onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
};

export default FinishScreen;

const LeaderBoardData = [
  {
    id: 1,
    name: "John Doe",
    score: 100,
  },
  {
    id: 2,
    name: "Jane Doe",
    score: 75,
  },
  {
    id: 3,
    name: "John Smith",
    score: 50,
  },
  {
    id: 4,
    name: "John Doe",
    score: 25,
  },
  {
    id: 5,
    name: "Jane Doe",
    score: 50,
  },
  {
    id: 6,
    name: "John Smith",
    score: 75,
  },
  {
    id: 7,
    name: "John Doe",
    score: 100,
  },
  {
    id: 8,
    name: "Jane Doe",
    score: 100,
  },
  {
    id: 9,
    name: "John Smith",
    score: 100,
  },
  {
    id: 10,
    name: "John Smith",
    score: 100,
  },
];
