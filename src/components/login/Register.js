import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../context/authcontext"
import { useState } from "react"


export default function Register () {
    
    const navegate = useNavigate();
    const {signUp}= useAuth ();
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
            await signUp(user.email, user.password)
            navegate("/")
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
            <p className="Tittle">Register</p>
            <label className="inputLabel">Name</label>
            <input className="loginInput" type="text" placeholder="Name" onChange={handleChange}></input>
            <label className="inputLabel">Email</label>
            <input type="email" className="loginInput" placeholder="Email Address" name="email" onChange={handleChange}></input>
            <label className="inputLabel">Password</label>
            <input className="loginInput" type="password" name="password"placeholder="Password" onChange={handleChange}></input>
            <label className="inputLabel"> Confirm Password</label>
            <input className="loginInput" type="password" placeholder="Password"></input>
            <button className="buttonLogin">Sign Up</button>
            <p>Already have an acount? <Link to="/login" className="loginLink"> Sign In </Link></p>
        </form>
    )
}