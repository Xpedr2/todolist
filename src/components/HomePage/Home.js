import { useAuth } from "../context/authContext"
import {Link} from "react-router-dom"


export default function Home () {
    const {user} = useAuth();
    return (
        <>
                <div className="Tittle">HOME</div>
                <div className=" ">

                    {(user != null) && <div className="textoClaro Tittle"> Hello {user.displayName || user.email}</div>}
                    {(user != null) && <Link to="/board"><button className="buttonLogin center">Go to my Board</button></Link>}
                </div>
        </>
    )
}