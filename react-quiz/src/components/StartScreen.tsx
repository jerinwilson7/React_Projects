import { useQuiz } from "../contexts/QuizContext"


export const StartScreen = () => {

  const{numQuestions,dispatch} = useQuiz()


    console.log(numQuestions)
  return (
    <div className='start'>
        <h2>Welcome to The React QuiZ!</h2>
        <h3>{numQuestions} questions to test your react mastery</h3>
        <button
         className="btn btn-ui"
         onClick={()=>dispatch({type:'START'})}
         >Lets start</button>
    </div>
  )
}
