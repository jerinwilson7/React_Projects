import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { PageNav } from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function Login() {

  const navigate = useNavigate()
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const {login,isAuthenticated} = useAuth()

  useEffect(()=>{
    if(isAuthenticated)
      navigate('/app',{replace:true})
  },[isAuthenticated,navigate])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(email && password)
     login(email,password)
  }

  //jk rowlling
   
  return (
    <main className={styles.login}>
        <PageNav/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" >Login</Button>
          {/* <button onClick={()=>login}>Login</button> */}
        </div>
      </form>
    </main>
  );
}


// nkxnvl advanced to the next level one more time wmklam r app 100 