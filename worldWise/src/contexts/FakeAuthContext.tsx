import {  createContext, useContext, useReducer } from "react";

type AuthProviderType = {
    children:React.ReactNode
}

type AuthActionType = {
    type: 'login'| 'logout';
    payload?:UserType
}

type initalStateType = {
    user:UserType;
    isAuthenticated:boolean
}
const intialState:initalStateType = {
    user: {
        name: "",
        email: "",
        password: "",
        avatar: "",
      },
    isAuthenticated:false
}

type UserType={
    name:string;
    email:string;
    password:string;
    avatar:string
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  

  const AuthContext = createContext<{ user: UserType; isAuthenticated: boolean; login: (email: string, password: string) => void; logout: () => void } | null>(null);
const reducer = (state:initalStateType,action:AuthActionType)=>{

    switch(action.type){
        case "login":
            return{ ...state,user:action.payload!,isAuthenticated:true}
        case 'logout':
            return{...state,user:intialState.user,isAuthenticated:false}
        default:
            throw new Error("Unkown Action")        
    }
}


function AuthProvider({ children }: AuthProviderType) {

    const [state, dispatch] = useReducer(reducer, intialState);

    const login = (email: string, password: string) => {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: "login", payload: FAKE_USER });
        }
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    return <AuthContext.Provider value={{ user: state.user, isAuthenticated: state.isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) throw new Error("The context was used outside the Authprovider");
    return context;
}

export { AuthProvider, useAuth };

