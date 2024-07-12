import { createContext, useContext, useEffect, useReducer } from "react";
import { ActionType, QuestionType, StateType } from "../types";


type QuizProviderType = {
    children:React.ReactNode
}

const SECS_PER_QUESTIONS = 20


const initialState: StateType = {
    questions: [],
    
    //*loading,error,ready,active,finished
    
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
    secondsRemaining: 10,
    maxPoints:0,
    numQuestions:0,
};

type QuizContextType = {
    questions: QuestionType[];
    status: "loading" | "error" | "ready" | "active" | "finished";
    index: number;
    answer: number | null;
    points: number;
    highScore: number;
    secondsRemaining: number;
    numQuestions:number;
    maxPoints:number;
    dispatch: React.Dispatch<ActionType>;
  };
  
  const QuizContext = createContext<QuizContextType | null>(null);
  
  
  const reducer = (state: StateType, action: ActionType): StateType => {
    const question = state.questions[state.index];
  
    switch (action.type) {
      case "DATA_RECEIVED":
        return { ...state,
             questions: action.payload,
              status: "ready",
              numQuestions:state.questions.length ,
              maxPoints:state.questions.reduce((acc, curr) => (acc += curr.points), 0)
            };
  
      case "DATA_FAILED":
        return { ...state, status: "error" };
  
      case "START":
        return { ...state, 
          status: "active",
           secondsRemaining:state.questions.length * SECS_PER_QUESTIONS };
  
      case "NEW_ANSWER":
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
  
      case "NEXT_QUESTION":
        return { ...state, index: state.index + 1, answer: null };
  
      case "TICK":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        };
      case "FINISHED":
        return {
          ...state,
          status: "finished",
          highScore:
            state.points > state.highScore ? state.points : state.highScore,
        };
      case "RESTART":
        return { ...initialState, questions: state.questions, status: "ready" };
  
      default:
        throw new Error("actions is unkown");
    }
  };

  const QuizProvider = ({children}:QuizProviderType)=>{

    const [
        { questions, status, index, answer, points, highScore, secondsRemaining,maxPoints,numQuestions },
        dispatch,
      ] = useReducer(reducer, initialState);

  
  
  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DATA_RECEIVED", payload: data }))
      .catch((err) => dispatch({ type: "DATA_FAILED", payload: err.message }));
  }, []);

  return <QuizContext.Provider
  value={{questions,
    secondsRemaining,
    status,
    answer,
    points,
    index,
    highScore,
    dispatch,
    maxPoints,
    numQuestions,
    
}}
  >
    {children}
  </QuizContext.Provider>

  }

  const useQuiz  = ()=>{
    const context = useContext(QuizContext)
    if (context === null) throw new Error("The context was used outside the Authprovider");
    return context
  }

  export {QuizProvider,useQuiz}

  //kdkldmkj