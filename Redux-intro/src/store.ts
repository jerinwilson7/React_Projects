import { combineReducers, configureStore } from "@reduxjs/toolkit"
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice"




const rootReducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
})





 const store = configureStore({
    reducer:rootReducer
 })

 

 export default store
 export type RootState = ReturnType<typeof rootReducer>;


//kjkj fundamentals redux toolkit asflot less code peremk