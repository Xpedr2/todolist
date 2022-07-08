import "./login.css"
import {Link} from "react-router-dom"

export default function Login () {
    return (
            <div className="loginContainer">
                <p className="Tittle">Welcome</p>
                <label className="inputLabel">Username</label>
                <input className="loginInput" required placeholder="Username"></input>
                <label className="inputLabel">Password</label>
                <input className="loginInput" required type="password" placeholder="Password"></input>
                <button className="buttonLogin">Login</button>
                <button className="buttonGoogle">Sign in width Google</button>
                <p>Forgot Password? <Link to="/RecoveryAccount" className="loginLink">Click Here</Link></p>
                <p>Don't have an acount <Link to="/register" className="loginLink">Sign Up</Link></p>
            </div>
    )
}