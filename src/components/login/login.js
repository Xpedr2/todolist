import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext"
import { useState } from "react"


export default function Login() {
    
    const navegate = useNavigate();
    const {login, loginWithGoogle}= useAuth ();
    const [error, setError] = useState();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        displayName: ""
    })

    const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            await login(user.email, user.password);
            navegate("/board")
        }
        catch (error) {
            
            if (error.code === "auth/weak-password") {
                setError("The password must be at least 6 characters")
            }
            // setError(error.message);
        }
    }

        const handleGoogleSignin = async () => {
            try{
                await loginWithGoogle();
                navegate("/board");
            }
            catch (error){
                setError(error.message);
            }
        }

    return (
        <form onSubmit={handleSubmit} className="loginContainer">
            <p className="Tittle">Welcome</p>
            <label className="inputLabel">Email</label>
            <input type="email" className="loginInput" placeholder="email" name="email" onChange={handleChange}></input>
            <label className="inputLabel">Password</label>
            <input className="loginInput" type="password" placeholder="Password" name="password" onChange={handleChange} ></input>
            <button className="buttonLogin" type="submit">Login</button>
            <button className="buttonGoogle" onClick={handleGoogleSignin}>Sign in width Google</button>
            <p>Forgot Password? <Link to="/RecoveryAccount" className="loginLink">Click Here</Link></p>
            <p>Don't have an acount <Link to="/register" className="loginLink">Sign Up</Link></p>
        </form>
    )
}