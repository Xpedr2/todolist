import { useState } from "react";

export default function TodoApp() {
    function handleClick(e){
        e.preventDefault();
        setTitle("Santi");
    }

    function handleChange(e){
        const value = e.target.value;

        setTitle(value);
    }

    const [title, setTitle] = useState("hola");
    return (
    <>
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input onChange={handleChange} className="todoImput" value={title} />
                <input onClick={handleClick} type="submit" value="Create todo" className="buttonCreate" />
                {title}
                </form>
        </div>
    </>);
}