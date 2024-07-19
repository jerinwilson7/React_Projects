import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Customer() {

  const customer = useSelector((store:RootState)=>store.customer)

    return <h2>👋 Welcome, {customer.fullName}</h2>;
  }
  
  export default Customer;
  