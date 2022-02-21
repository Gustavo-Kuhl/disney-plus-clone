import { createContext } from "react";

interface LoginContextType {
    isLogged: boolean,
    setIsLogged: (newState: boolean) => void
}

const initialState = {
    isLogged: false,
    setIsLogged: () => {}
}

export const LoginContext = createContext<LoginContextType>(initialState);
