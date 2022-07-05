import "./nav.css"

export default function NavBarr () {
    return (
        <div className="contaionerNav">
            <ul className="navlist">
                <li>home</li>
                <li><label><input type="checkbox"></input></label></li>
                <li>Login</li>
            </ul>
        </div>
    )
}