// Component Types

declare type WelcomeScreenProps = {
  onStart: () => void;
  name: string;
  setName: (name: string) => void;
  numQuestions: number;
};

declare type TestScreenProps = {
  onDone: () => void;
  questions: QuestionWithResponse[];
  onUpdateResponse: (question: QuestionWithResponse, response: string) => void;
};

declare type FinishScreenProps = {
  onRestart: () => void;
};

// Data Types
declare type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

declare type QuestionWithResponse = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  response: string;
};
