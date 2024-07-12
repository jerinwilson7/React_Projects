import { useQuiz } from "../contexts/QuizContext";



export const Finished = () => {

  const {points,maxPoints,highScore,dispatch} = useQuiz()

    const percentage = (points / maxPoints) *100
  return (
    <>
    <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
    </p>

    <p className="highscore">(Highscore: {highScore} points)</p>

    <button 
     onClick={()=>dispatch({type:'RESTART'})}
    className="btn btn-ui">
        RESTART
        </button>
    </>
  )
}
// restart the quiz actually implement xcsdsxczxc