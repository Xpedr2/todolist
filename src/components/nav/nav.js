import "./nav.css"
import {NavLink} from "react-router-dom"
import { useAuth } from "../context/authContext"


export default function NavBarr () {
    const {user, logout} = useAuth();

    const handleLogOut = async () => {
        await logout();
    }
    return (
        <div className="contaionerNav">
            <ul className="navlist">
                <li><NavLink to="/">home</NavLink></li>
                <li><label><input type="checkbox"></input></label></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <button onClick={handleLogOut}>LogOut</button>
            </ul>
        </div>
    )
}