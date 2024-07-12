
import { useReducer } from 'react';
import './App.css'

type InitialStateTypes = {
  balance:number;
  loan:number;
  isActive:boolean
}

const initalState:InitialStateTypes = {
  balance:0,
  loan:0,
  isActive:false,
}

type ActionType = {
  type:"OPEN" | "DEPOSIT" | "WITHDRAW" | "GET_LOAN" | "PAY_LOAN" | "CLOSE_ACCOUNT";
}







const reducer = (state:InitialStateTypes,action:ActionType):InitialStateTypes=>{

  switch(action.type){
    case 'OPEN':
      return {...state,balance:150,isActive:true}
    
    case 'DEPOSIT':
      return {...state,balance:state.balance+50} 
    case 'WITHDRAW':
      return{...state,balance:state.balance-50}   
    case 'GET_LOAN':
       return {...state,loan:state.loan+500,balance:state.balance+500}  
    case 'PAY_LOAN':
        return {...state,balance:state.balance-state.loan,loan:0}
    case 'CLOSE_ACCOUNT':

      if(state.balance === 0) 
        return {...initalState} 
      return{...state}      
      default:
        return state
  }

}

function App() {


  const [{balance,isActive,loan}, dispatch] = useReducer(reducer,initalState)



  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={()=>{dispatch({type:'OPEN'})}} disabled={isActive}> 
          Open account
        </button>
      </p>
      <p>
        <button onClick={()=>{dispatch({type:'DEPOSIT'})}} disabled={!isActive}> 
          Deposit 50
        </button>
      </p>
      <p>
        <button onClick={()=>{dispatch({type:'WITHDRAW'})}} disabled={!isActive}> 
          withdraw 50
        </button>
      </p>
      <p>
        <button onClick={()=>{dispatch({type:'GET_LOAN'})}} disabled={!isActive}> 
          Request loan 500
        </button>
      </p>
      <p>
        <button onClick={()=>{dispatch({type:'PAY_LOAN'})}} disabled={!isActive}> 
          Pay loan 
        </button>
      </p>
      <p>
        <button onClick={()=>{dispatch({type:'CLOSE_ACCOUNT'})}} disabled={!isActive}> 
         Close Account 
        </button>
      </p>
    </div>
  )
}

export default App

//l,lj ll,l,;l,l,;l,;,l,;,;l,