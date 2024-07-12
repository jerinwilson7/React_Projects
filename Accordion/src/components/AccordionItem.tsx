
type AccordionItemType = {
    number:number
    title:string
    text:string
    currentOpen:number,
    setIsOpen:React.Dispatch<React.SetStateAction<number>>
}


function AccordionItem({number,title,text,currentOpen, setIsOpen}:AccordionItemType) {
    const isOpen = number === currentOpen

    // const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () =>{
        setIsOpen(number)
    }

  return (
    <div className={`item ${isOpen ? "open" : ''}`} onClick={handleToggle}>
        <p className="number">{number < 9 ? `0${number}` : number + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? '-':'+'}</p>
        {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}

// fsdf jieksdflkkj

export default AccordionItem