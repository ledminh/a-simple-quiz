import "./index.css";

import { useState } from "react";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import TestScreen from "./components/screens/TestScreen";
import FinishScreen from "./components/screens/FinishScreen";

function App() {
  const [state, setState] = useState<"not_start" | "started" | "done">(
    "started"
  );

  return (
    <>
      <header>
        <h1>A Simple Quiz</h1>
        <p>Test your knowledge</p>
      </header>
      <main>
        {state === "not_start" && (
          <WelcomeScreen onStart={() => setState("started")} />
        )}
        {state === "started" && <TestScreen onDone={() => setState("done")} />}

        {state === "done" && (
          <FinishScreen onRestart={() => setState("not_start")} />
        )}
      </main>
    </>
  );
}

export default App;
