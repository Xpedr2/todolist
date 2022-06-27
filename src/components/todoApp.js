import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complited: false
        }

        const temp = [... todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    function handleChange(e){
        const value = e.target.value;

        setTitle(value);
    }

    return (
    
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoImput" value={title} />
                <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate" />
                
                </form>
                <div className="todosContainer">
                    {
                        todos.map(item => (
                            <Todo key={item.id} item={item}/>
                        ))
                    }
                </div>
        </div>
    );
}