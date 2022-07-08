import "./login.css"
import {Link} from "react-router-dom"
export default function Register () {
    
    return (
            <div className="loginContainer">
                <p className="Tittle">Register</p>
                <label className="inputLabel">Name</label>
                <input className="loginInput" type="text" placeholder="Name"></input>
                <label className="inputLabel">Email</label>
                <input type="email" className="loginInput" placeholder="Email Address"></input>
                <label className="inputLabel">Password</label>
                <input className="loginInput" type="password" placeholder="Password"></input>
                <label className="inputLabel"> Confirm Password</label>
                <input className="loginInput" type="password" placeholder="Password"></input>
                <button className="buttonLogin">Sign Up</button>
                <p>Already have an acount? <Link to="/login" className="loginLink"> Sign In </Link></p>
            </div>
    )
}