import React, { useState } from "react"
import { FriendsType } from "../Types/friends"
import Button from "./Button"

type FormSplitBillProps = {
  selectedFriend:FriendsType
  onSplitBill: (value: number) => void
}


function FormSplitBill({selectedFriend,onSplitBill}:FormSplitBillProps) {
  const [bill, setBill] = useState(0)
  const [paidByUser, setPaidByUser] = useState(0)
  const paidByFriend = bill ? bill - paidByUser : 0
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()

    if(!bill || !paidByUser)  return
    // const onSplitValue = whoIsPaying ==== 'user' ? paidByFriend : -paidByUser
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }
   
  
  return (

    <form  className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>Bill Value</label>
        <input type="text"
         value={bill}
         onChange={(e)=>setBill (Number(e.target.value))}
         />

        <label>Your expense</label>
        <input
         type="text"
         value={paidByUser}
         onChange={(e)=>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
          />

        <label>{selectedFriend.name}`s Expense</label>
        <input type="text" disabled  value={paidByFriend}/>
 
        <label>Who is paying for the bill</label>
        <select 
        value={whoIsPaying}
        onChange={(e)=>setWhoIsPaying(e.target.value)}
        >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>
  )
}



export default FormSplitBill