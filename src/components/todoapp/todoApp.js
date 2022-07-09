import { useState } from "react";
import { useAuth } from "../context/authContext";
import Todo from "./todo";


export default function TodoApp() {
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);
    const {user} = useAuth();
    

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complited: false
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    function handleChange(e){
        const value = e.target.value;

        setTitle(value);
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find((item)=>item.id === id);
        item.title = value;
        setTodos (temp);
    }
    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }
    return (
        
        <div >
            <h2 className="Tittle">Board</h2>
            <div className="todoContainer">
                <form className="todoCreateForm" onSubmit={handleSubmit}>
                        <input onChange={handleChange} className="todoImput" value={title} />
                        <input onClick={handleSubmit} type="submit" value="+" className="buttonCreate" />
                        
                </form>
                <div className="todosContainer">
                    {
                        todos.map(item => (
                                <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                        ))
                    }
                </div>
            </div>
                
        </div>
    
    );
}