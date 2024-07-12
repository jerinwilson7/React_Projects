import "./App.css";
import Header from "./components/Header";
import { Main } from "./components/Main";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import { StartScreen } from "./components/StartScreen";
import { Questions } from "./components/Questions";
import { NextButton } from "./components/NextButton";
import { Progress } from "./components/Progress";
import { Finished } from "./components/Finished";
import { Footer } from "./components/Footer";
import { Timer } from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext";




function App() {
  // restart the quiz actually implement

  const {status} = useQuiz()
  
  
 

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorComponent />}
        {status === "ready" && (
          <StartScreen/>
        )}
        {status === "active" && (
          <>
            <Progress
             
            />
            <Questions
              
            />

            <Footer>
              <Timer/>

              <NextButton/>
            </Footer>
          </>
        )}

        {status === "finished" && (
          <Finished/>
        )}
      </Main>
    </div>
  );
}

export default App;

