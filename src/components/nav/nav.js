import "./nav.css"
import {NavLink, useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext"
import UserData from "./UserData";


export default function NavBarr () {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    

    const handleLogOut = async () => {
        await logout();
        navigate("/");

    }
    return (
        <div className="contaionerNav">
            <ul className="navlist">
                <li><NavLink className="textoClaro center" to="/">home</NavLink></li>
                <li><label><input type="checkbox"></input></label></li>
                {/* <button className="buttonLogOut center" onClick={handleLogOut}>LogOut</button> */}
                <li><NavLink  to="/login" className="center textoClaro">Login</NavLink></li>
                {user != null && <li><NavLink className="textoClaro center" to="/board">Board</NavLink></li>}
                {(user != null) && <button className="buttonLogOut center" onClick={handleLogOut}>LogOut</button>}
                {(user != null) && <UserData className="center"/>}
            </ul>
        </div>
    )
}