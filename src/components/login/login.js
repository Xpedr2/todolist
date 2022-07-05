import "./login.css"
export default function Login () {
    return (
        <>
            <div className="loginContainer">
                <label className="inputLabel">Username</label>
                <input placeholder="Username"></input>
                <label>Password</label>
                <input type="password" placeholder="Password"></input>
                <button className="buttonLogin">Login</button>
                <button>Sing in width Google</button>
                <p>Forgot Password? <a>Click Here</a></p>
                <p>Don't have an acount <a>Sing Up</a></p>
            </div>
            <div className="divLogin">Login</div>
        </>
    )
}