import { useAuth } from "../context/authContext"

export default function UserData() {
    const {user} = useAuth();
    return (
        <>
            <div className="userInfo">
                <p className="textUser no-wrap">{user.displayName || user.email}</p>
                <img className="userImg" src={user.photoURL || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"} />
            </div>
        </>
    )
}