import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Total from "./components/Total";
import Button from "./components/Button";

function App() {
  const [bill, setBill] = useState(0);
  const [selfRated, setSelfRated] = useState(0)
  const [friendRated, setFriendRated] = useState(0)


  return (
    <div>
      <Bill setBill={setBill} bill={bill} />

      <Service setRated = {setSelfRated} rated = {selfRated}>
        <p>How did you like the service</p>
      </Service>

      <Service setRated = {setFriendRated} rated = {friendRated}>
        <p>How did your friend like the service</p>
      </Service>


      <Total bill={bill} selfRated={selfRated} friendRated={friendRated} />

      <Button setBill = {setBill} setSelfRated={setSelfRated} setFriendRated ={setFriendRated}/>
    </div>
  );
}

export default App;
