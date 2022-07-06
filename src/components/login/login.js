import "./login.css"
export default function Login () {
    return (
            <div className="loginContainer">
                <p className="loginTittle">Welcome</p>
                <label className="inputLabel">Username</label>
                <input className="loginInput" placeholder="Username"></input>
                <label className="inputLabel">Password</label>
                <input className="loginInput" type="password" placeholder="Password"></input>
                <button className="buttonLogin">Login</button>
                <button className="buttonGoogle">Sing in width Google</button>
                <p>Forgot Password? <a className="loginLink">Click Here</a></p>
                <p>Don't have an acount <a className="loginLink">Sing Up</a></p>
            </div>
    )
}