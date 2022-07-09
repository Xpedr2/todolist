import { createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../login/Firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("ther is not auth provider")
    return context;
}

export function AuthProvaider({ children }) {
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => signOut(auth);
    
    useEffect (() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
    }, [])

    return <authContext.Provider value={{signUp, login, user, logout}}>{children}</authContext.Provider>
}
