import { createContext, useContext, useState } from "react";

type ThemeProviderPropsType = {
    children: React.ReactNode;
}

type InitialStateType = {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const initialState: InitialStateType = {
    darkTheme: false,
    toggleTheme: () => {},
};

export const ThemeContext = createContext<InitialStateType>(initialState);

export function ThemeProvider({ children }: ThemeProviderPropsType) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    const state = {
        darkTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={state}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme =()=>{
    return useContext(ThemeContext);
}
