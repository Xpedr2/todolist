import { useState } from "react";

export default function Todo({item}){
    const [isEdit, setIsEdit] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
    }
    
    
    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title);
        
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newValue}/>
                <button>Update</button>
            </form>
        );
    }

    function TodoElement(){
        return (
            <div>
                {item.title}
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
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