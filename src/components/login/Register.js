import "./login.css"
import {Link} from "react-router-dom"
import { useAuth } from "../context/authcontext"
import { useState } from "react"

export default function Register () {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({target: {name, value}}) => {
        setUser ({...user, [name]: value })
    }
    
    const {signUp}= useAuth ();

    const handleSubmit = e => {
        e.preventDefault()
        signUp(user.email, user.password)
    }
    
    return (
            <form onSubmit={handleSubmit} className="loginContainer">
                <p className="Tittle">Register</p>
                <label className="inputLabel">Name</label>
                <input className="loginInput" type="text" placeholder="Name" onChange={handleChange}></input>
                <label className="inputLabel">Email</label>
                <input type="email" className="loginInput" placeholder="Email Address" onChange={handleChange}></input>
                <label className="inputLabel">Password</label>
                <input className="loginInput" type="password" placeholder="Password" onChange={handleChange}></input>
                <label className="inputLabel"> Confirm Password</label>
                <input className="loginInput" type="password" placeholder="Password"></input>
                <button className="buttonLogin">Sign Up</button>
                <p>Already have an acount? <Link to="/login" className="loginLink"> Sign In </Link></p>
            </form>
    )
}