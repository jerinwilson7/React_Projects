
type ButtonProps = {
    setBill: React.Dispatch<React.SetStateAction<number>>
    setSelfRated: React.Dispatch<React.SetStateAction<number>>
    setFriendRated: React.Dispatch<React.SetStateAction<number>>

}

function Button({setBill,setSelfRated,setFriendRated}:ButtonProps) {

    const handleReset = ()=>{
        setBill(0);
        setSelfRated(0);
        setFriendRated(0);
    }

  return (
    <button onClick={handleReset}>Reset</button>
  )
}

export default Button