
import { useState } from 'react'
import './App.css'

type QuestionType  = {
  id: number
  question:string
  answer:string
}

function App() {

  return (
    <div>
      <FlashCard />
    </div>
  )
}

const questions : QuestionType[] = [
  {
    id:3457,
    question:"what are the buliding blocks of React apps ?",
    answer:"Components",
  },

  {
    id:7336,
    question:'What language react is based on ?',
    answer:'Javascript'
  },
  {
    id:8832,
    question:'What is the name of the syntax used to describe a UI in React',
    answer:"JSX"
  },
  {
    id:1297,
    question:'How to pass data from parent to child components',
    answer:'Props',

  },
  {
    id: 9103,
    question: 'How to give components memory',
    answer:'useState hook'
  },
  {
    id:2002,
    question:'What do we call an input element that is completely synchronised',
    answer:"Controll element"
  }
]

const FlashCard = () =>{

  const [selectedId, setSelectedId] = useState<number | null>(null)
  const handleClick = (id:number) =>{
    setSelectedId(id !== selectedId ? id : null)
  }
  console.log(selectedId)

  return(
    <div className='flashcards'>
      {questions.map((question)=>(
        <div
         key={question.id}
         className={question.id === selectedId ? 'selected' : ''}
         onClick={()=>handleClick(question.id)}
         >
          <p> {question.id === selectedId ? question.answer :  question.question}</p>
        </div>
      ))}
    </div>
  )
}

export default App
