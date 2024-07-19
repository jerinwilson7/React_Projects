import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// type AccTransaction={
//     type:'account/deposit' | 'account/withdraw',
//     payload:number
// }
// type LoanReq={
//     type:'account/requestLoan' 
//     payload:{
//         amount:number,
//         purpose:string
//     }
// }

// type PayLoan = {
//     type:'account/PayLoan',


// }

// type ActionType = AccTransaction | LoanReq | PayLoan



const initialState = {
    balance:0,
    loan:0,
    loanPurpose:''
}

const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        deposit(state,action:PayloadAction<number>){
            state.balance = state.balance + action.payload
        },
        withdraw(state,action:PayloadAction<number>){
            state.balance = state.balance-action.payload
        },
        requestLoan :{

            prepare(amount,purpose){
                return {
                    payload:{
                        amount,
                        purpose
                    }
                }
            },
            
            reducer(state,action:PayloadAction<{amount:number,purpose:string}>){
            if(state.loan > 0) return

            state.loan = action.payload.amount
            state.loanPurpose = action.payload.purpose
         
              state.balance += action.payload.amount
        },
        },

        payLoan(state){
            state.balance -= state.loan
            state.loan = 0;
            state.loanPurpose = ''
        }
    }
})

console.log(accountSlice);

export const {deposit,payLoan,requestLoan,withdraw} = accountSlice.actions

export default accountSlice.reducer

// dfd

// export default function accountReducer(state=initalState,action:ActionType){

//     switch(action.type){
//         case "account/deposit":
//             return{...state,balance:state.balance+action.payload}

//         case 'account/withdraw' :
//             return{
//                 ...state,
//                 balance:state.balance-action.payload,

//             } 
           
//         case 'account/requestLoan':
//             if(state.loan > 0) return state
//             return {
//                 ...state,
//                 loan:action.payload.amount,
//                 loanPurpose:action.payload.purpose,
//                 balance:state.balance+action.payload.amount
//             }
            
//         case 'account/PayLoan':
//             return{
//                 ...state,
//                 loan:0,
//                 loanPurpose:'',
//                 balance:state.balance-state.loan
//             }
            
            
           
//         default:
//            return state;    
//     }
// }




// export const deposit = (amount:number):AccTransaction=>{
//     return{type:'account/deposit',payload:amount}
// }
// export const withdraw = (amount:number):AccTransaction=>{
//     return{type:"account/withdraw",payload:amount}
// }
// export const requestLoan = (amount:number,purpose:string):LoanReq=>{
//     return{
//         type:"account/requestLoan",
//         payload:{amount,purpose}
//     }
// }
// export const payLoan = ():PayLoan=>{
//     return{
//         type:"account/PayLoan",
//     }
// }


// sg thunk create asyc resthunks thunksno setup required action creator we get creating customer slice