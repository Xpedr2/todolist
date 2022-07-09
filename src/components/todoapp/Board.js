import TodoApp from "./todoApp";

export default function() {
    return (
        <>
            <div className="Tittle">Board</div>
            <div className="boxshadow backgroundBlur board">
                <TodoApp/>
                <TodoApp/>
                <TodoApp/>
            </div>
        </>

    )
}