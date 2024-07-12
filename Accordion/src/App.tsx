import Accordion from "./components/Accordion"
import { faqs } from "./data/faq"


function App() {
 

  return (
   <div className="app">
    <Accordion data={faqs}/>
   </div>
  )
}

export default App
