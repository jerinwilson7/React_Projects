
// type CreateCustomer = {
//     type:'customer/createCustomer',
//     payload:{
//         fullName:string,
//         nationalID:string
//         createdAt:string
//     }
// }

import { createSlice,PayloadAction } from "@reduxjs/toolkit"

// type UpdateCustomer = {
//     type:'customer/updateCustomer',
//     payload:string
// }


export interface CustomerState {
    fullName: string;
    nationalID: string;
    createdAt: string;
}

const initialState: CustomerState = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}


const customerSlice  = createSlice({
    initialState,
    name:'customer',
    reducers:{

        createCustomer:{
            prepare(fullName: string, nationalID: string,) {     
                           return {
                    payload:{
                        fullName,
                        nationalID,
                        createdAt:new Date().toISOString()
                    },
                }
            },

            reducer(state,action:PayloadAction<{fullName:string,nationalID:string,createdAt:string}>){
    
                state.fullName = action.payload.fullName
                state.nationalID = action.payload.nationalID
             
                  state.createdAt = action.payload.createdAt
            },
        },
        updateCustomer(state,action:PayloadAction<string>){
            state.fullName = action.payload
        }
    }
})

export const {createCustomer,updateCustomer} = customerSlice.actions
export default customerSlice.reducer






// type CustomerActionType = CreateCustomer | UpdateCustomer 



// export default function customerReducer (state=initialStateCustomer,action:CustomerActionType){

//     switch(action.type){
//         case "customer/createCustomer":
//             return{
//                 ...state,
//                 fullName:action.payload.fullName,
//                 nationalID:action.payload.nationalID,
//                 createAt:action.payload.createdAt
//             }

//         case 'customer/updateCustomer' :
//             return{
//                 ...state,
//                 fullName:action.payload,

//             } 
           
       
            
            
           
//         default:
//            return state;    
//     }
// }


// export function createCustomer(fullName:string,nationalID:string):CreateCustomer{
//     return{type:'customer/createCustomer',payload:{
//         fullName,
//         nationalID,
//         createdAt:new Date().toISOString()
//     }}
// }

// export function updateCustomer (fullName:string):UpdateCustomer{
//     return{type:'customer/updateCustomer',payload:fullName}
// }



