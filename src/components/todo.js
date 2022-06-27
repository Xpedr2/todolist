import { useState } from "react";

export default function Todo({item}){
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
        
        <div>
            {item.title}
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button>Delete</button>
         </div></>
        
         );
}