import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("ther is not auth provider")
    return context;
}
const singUp = (email, password) => {
    createUserWithEmailAndPassword(auth);
}

export function AuthProvaider({ children }) {
    const user = {
        login: true, 
    }
    return <authContext.Provider value={{singUp}} >{children}</authContext.Provider>
}

