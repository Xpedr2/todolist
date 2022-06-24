import { useState } from "react";

export default function TodoApp() {
    function handleClick(e){
        e.preventDefault();
        setTitle("Santi");

    }
    const [title, setTitle] = useState("hola");
    return (
    <>
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input className="todoImput" value={title} />
                <input onClick={handleClick} type="submit" value="Create todo" className="buttonCreate" />
                {title}
                </form>
        </div>
    </>);
}