import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../login/Firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("ther is not auth provider")
    return context;
}

export function AuthProvaider({ children }) {
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    
    return <authContext.Provider value={{signUp}}>{children}</authContext.Provider>
}

