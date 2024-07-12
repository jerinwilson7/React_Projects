import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

type ProtectedRouteType = {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children}:ProtectedRouteType) => {

    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticated) navigate('/')
    },[isAuthenticated,navigate])
    
  return isAuthenticated ? children : null
}


// mkm