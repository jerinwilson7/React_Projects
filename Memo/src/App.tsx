import { useEffect, useMemo, useState } from "react"

export default function App() {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(()=>{
    
   return slowFunction(number)
  },[number])

  const themeStyles = useMemo(()=>{
    return{
    backgroundColor: dark ? 'black' : 'white',
    color: dark? 'white' : 'black'
  }
},[dark])


  useEffect(()=>{
    console.log('Theme changed')
  },[themeStyles])

  return (
    <>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
    <button onClick={()=>setDark(prevDark => !prevDark)}>ChangeTheme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}


function slowFunction(num:number){
  console.log('Calling slow function')
  for(let i=0;i<=10000;i++){
    console.log(i)
  }
  return num * 2
}

// pest context escape A dkvkmv xcmv store as well in the store per data separated fd