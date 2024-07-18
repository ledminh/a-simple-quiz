import "./index.css";

import { useEffect, useState } from "react";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import TestScreen from "./components/screens/TestScreen";
import FinishScreen from "./components/screens/FinishScreen";
import { toQuestionWithResponse } from "./utils";
import { GET_QUESTIONS_URL } from "./constants";

function App() {
  // STATES

  const [state, setState] = useState<"not_start" | "started" | "done">(
    "not_start"
  );

  const [questions, setQuestions] = useState<QuestionWithResponse[]>([]);

  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  // FUNCTIONS
  const onUpdateResponse = (
    question: QuestionWithResponse,
    response: string
  ) => {
    const updatedQuestion = {
      ...question,
      response,
    };

    const updatedQuestions = questions.map((q) =>
      q.id === question.id ? updatedQuestion : q
    );

    setQuestions(updatedQuestions);
  };

  const onDone = () => {
    setState("done");
  };

  const onRestart = () => {
    setName("");
    setScore(0);
    setState("not_start");
    setQuestions(questions.map((q) => ({ ...q, response: "" })));
  };

  // EFFECTS

  useEffect(() => {
    fetch(GET_QUESTIONS_URL)
      .then((response) => response.json())
      .then((questions: Question[]) =>
        setQuestions(questions.map(toQuestionWithResponse))
      );
  }, []);

  return (
    <div className="max-w-3xl m-2 md:m-auto">
      <header className="mb-8">
        <h1 className="border-b-2 border-b-gray-600">A Simple Quiz</h1>
        <p className="font-mono font-semibold">Test your knowledge</p>
      </header>
      <main>
        {state === "not_start" && (
          <WelcomeScreen
            onStart={() => setState("started")}
            name={name}
            setName={setName}
            numQuestions={questions.length}
          />
        )}
        {state === "started" && (
          <TestScreen
            onDone={onDone}
            questions={questions}
            onUpdateResponse={onUpdateResponse}
          />
        )}

        {state === "done" && (
          <FinishScreen onRestart={onRestart} questions={questions} />
        )}
      </main>
    </div>
  );
}

export default App;
