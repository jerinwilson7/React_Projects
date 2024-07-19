import CreateCustomer from './features/customers/CreateCustomer'
import { AccountOperations } from './features/accounts/AccountOperations'
import Customer from './features/customers/Customer'
import BalanceDisplay from './features/accounts/BalanceDisplay'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {

  const customer = useSelector((state:RootState)=>state.customer)


  return (
    <div>
    <h1>🏦 The React-Redux Bank ⚛️</h1>
  {customer.fullName==='' ? (
    
    <CreateCustomer />
  )  :(

<>
    <Customer />
    <AccountOperations />
    <BalanceDisplay />
</>
  )
}
  </div>
  )
}

export default App
