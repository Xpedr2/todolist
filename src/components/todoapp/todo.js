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
                <div className="todoItem backgroundBlur boxshadow">
                    <form className="todoUpdateForm" onSubmit={handleSubmit}>
                        <input className="todoImput" type="text" onChange={handleChange} value={newValue}/>
                        <button className="buttonCreate boxshadow" onClick={handleClickUpdateTodo}>Update</button>
                    </form>
                </div>
            );
        }

        function TodoElement(){
            return (
                <div className="todoItem backgroundBlur boxshadow">
                    <div className="itemTitle">{item.title}</div>
                    <button className="buttonCreate boxshadow" onClick={() => setIsEdit(true)}>Edit</button>
                    <button className="buttonCreate boxshadow"onClick={(e) => onDelete(item.id)}>Delete</button>
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