import "./index.css";

import { useState } from "react";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import TestScreen from "./components/screens/TestScreen";
import FinishScreen from "./components/screens/FinishScreen";

function App() {
  const [state, setState] = useState<"not_start" | "started" | "done">(
    "not_start"
  );

  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const onDone = () => {
    setState("done");
  };

  const onRestart = () => {
    setName("");
    setScore(0);
    setState("not_start");
  };

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
          />
        )}
        {state === "started" && <TestScreen onDone={onDone} />}

        {state === "done" && <FinishScreen onRestart={onRestart} />}
      </main>
    </div>
  );
}

export default App;
