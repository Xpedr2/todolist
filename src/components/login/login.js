import "./login.css"
import { Link } from "react-router-dom"


export default function Login() {
    
   

    const handleSubmit = e => {
        e.preventDefault()
        
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