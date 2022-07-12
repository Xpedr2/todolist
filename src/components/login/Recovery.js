import { useState } from "react"
import { useAuth } from "../context/authContext"
import {Link, useNavigate} from "react-router-dom"

export default function RecoveryAccount ()  {

    const {resetPassword}= useAuth ();
    const navegate = useNavigate();
    const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

    const [error, setError] = useState();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleResetPassword = async (e) => {
        e.preventDefault()
        if(!user.email) return setError ("Please enter your email");
        setError("");
        try{
            await resetPassword(user.email);
            navegate("/login")
        }
        catch (error) {
            
            if (error.code === "auth/weak-password") {
                setError("The password must be at least 6 characters")
            }
            // setError(error.message);
        }
    }
    return (
        <form className="loginContainer">
            <p className="Tittle">Reset Password</p>
            <label className="inputLabel">Email</label>
            <input type="email" className="loginInput" placeholder="Email Address" name="email" onChange={handleChange}></input>
            <button className="buttonLogin" type="submit" onClick={handleResetPassword}>Send Recovery Email</button>
            <p>Already have an acount? <Link to="/login" className="loginLink"> Sign In </Link></p>
        </form>
    )
}