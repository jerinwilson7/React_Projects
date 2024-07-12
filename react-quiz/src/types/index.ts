export type QuestionType = {
  id: number;
  question: string;
  correctOption: number;
  options: string[];
  points: number;
};

export type StateType = {
  questions: QuestionType[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highScore: number;
  secondsRemaining: number;
  numQuestions:number;
  maxPoints:number;
};

type DataReceivedAction = {
  type: "DATA_RECEIVED";
  payload: QuestionType[];
};

type DataFailedAction = {
  type: "DATA_FAILED";
  payload: string;
};

type StartAction = {
  type: "START";
};

type NewAnswer = {
  type: "NEW_ANSWER";
  payload: number;
};

type NextAnswer = {
  type: "NEXT_QUESTION";
};

type Finished = {
  type: "FINISHED";
};

type Restart = {
  type: "RESTART";
};

type Tick = {
  type: "TICK";
};

export type ActionType =
  | DataReceivedAction
  | Tick
  | Restart
  | Finished
  | NextAnswer
  | NewAnswer
  | DataFailedAction
  | StartAction;
