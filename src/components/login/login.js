import "./login.css"
export default function Login () {
    return (
            <div className="loginContainer">
                <p className="welcome">Welcome</p>
                <label className="inputLabel">Username</label>
                <input placeholder="Username"></input>
                <label>Password</label>
                <input type="password" placeholder="Password"></input>
                <button className="buttonLogin">Login</button>
                <button className="buttonGoogle">Sing in width Google</button>
                <p>Forgot Password? <a className="loginLink">Click Here</a></p>
                <p>Don't have an acount <a className="loginLink">Sing Up</a></p>
            </div>
    )
}