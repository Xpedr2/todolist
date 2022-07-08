import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../context/authcontext"
import { useState } from "react"


export default function Login() {
    
    const navegate = useNavigate();
    const {login}= useAuth ();
    const [error, setError] = useState();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({target: {name, value}}) => {
        setUser ({...user, [name]: value })
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            await login(user.email, user.password)
            navegate("/board")
        }
        catch (error) {
            
            if (error.code === "auth/weak-password") {
                setError("The password must be at least 6 characters")
            }
            // setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="loginContainer">
            <p className="Tittle">Welcome</p>
            <label className="inputLabel">Email</label>
            <input type="email" className="loginInput" placeholder="email" name="email"></input>
            <label className="inputLabel">Password</label>
            <input className="loginInput" type="password" placeholder="Password" name="password" ></input>
            <button className="buttonLogin">Login</button>
            <button className="buttonGoogle">Sign in width Google</button>
            <p>Forgot Password? <Link to="/RecoveryAccount" className="loginLink">Click Here</Link></p>
            <p>Don't have an acount <Link to="/register" className="loginLink">Sign Up</Link></p>
        </form>
    )
}