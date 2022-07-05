import "./todo.css"
import { useState } from "react";

export default function Todo({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);
    function handleSubmit(e) {e.preventDefault();}
    
    
        function FormEdit() {
            const [newValue, setNewValue] = useState(item.title);
            
            function handleChange(e){
                const value = e.target.value;
                setNewValue(value);
            }
            function handleClickUpdateTodo(){
                onUpdate(item.id, newValue);
                setIsEdit(false);
            }
            return (
                <form className="todoUpdateForm" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={newValue}/>
                    <button onClick={handleClickUpdateTodo}>Update</button>
                </form>
            );
        }

        function TodoElement(){
            return (
                <div className="todo">
                    {item.title}
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                    <button onClick={(e) => onDelete(item.id)}>Delete</button>
                </div>
            );
        }

    return (
    <>
        <div className="todo">{isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
        
    </>
        
    );
}