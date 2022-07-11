import { createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../login/Firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("ther is not auth provider")
    return context;
}

export function AuthProvaider({ children }) {
    const [user, setUser] = useState(null);
    const {loading, setLoading} = useState(true);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        const userCredentials = signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
    }
    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider) 
    }
    
    useEffect (() => {
        onAuthStateChanged(auth, currentUser => {
            console.log({ currentUser });
            setUser(currentUser);
            setLoading(false);
        });
    }, [])

    return <authContext.Provider value={{signUp, login, user, logout, loading, loginWithGoogle}}>{children}</authContext.Provider>
}
