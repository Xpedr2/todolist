import "./nav.css"
import {NavLink} from "react-router-dom"

export default function NavBarr () {
    return (
        <div className="contaionerNav">
            <ul className="navlist">
                <li><NavLink to="/">home</NavLink></li>
                <li><label><input type="checkbox"></input></label></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}