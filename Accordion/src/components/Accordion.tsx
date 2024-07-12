import { useState } from "react"
import { FaqTypes } from "../Types/FaqTypes"
import AccordionItem from "./AccordionItem"

type AccordionType = {
    data:FaqTypes[]
}


function Accordion({data}:AccordionType) {
    const [currentOpen, setCurrentOpen] = useState(0)
  return (
    <div className="accordion">
        {data.map((item,index)=>(
            <AccordionItem 
            currentOpen = {currentOpen}
            setIsOpen = {setCurrentOpen}
            number={index+1} 
            text={item.text}
             title={item.title}
              key={index}/>
        ))}
    </div>
  )
}

export default Accordion