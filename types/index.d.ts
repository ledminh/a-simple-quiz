// Component Types

declare type WelcomeScreenProps = {
  onStart: () => void;
  name: string;
  setName: (name: string) => void;
};

declare type TestScreenProps = {
  onDone: () => void;
};

declare type FinishScreenProps = {
  onRestart: () => void;
};
