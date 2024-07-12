import { useQuiz } from "../contexts/QuizContext";
import { Option } from "./Option";



export const Questions = () => {

  const {questions,index} = useQuiz()

  const question = questions[index]

  return (
    <div>
        <h4>{question.question}</h4>
        <Option/>
    </div>
  )
}


//ldskfkl