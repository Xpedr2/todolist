import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }
    
    return <authContext.Provider value={{signUp, login}}>{children}</authContext.Provider>
}
