import { useState } from "react"
import TodoListRender from "./TodoListRender";

export default function Todo(){
    const [todo, setTodo] = useState(" ");
    const [todoList, setTodoList] = useState([]);

    const handleInputChange = (event) =>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newList = todoList;
        newList.push(todo);
        setTodoList(newList)
        setTodo("")
    }

    return(<div>
        <form onSubmit={handleSubmit}>
            <input value={todo} type="text" onChange={handleInputChange}></input>
            <button type="submit">Add</button>
        </form>
        {todoList.map((item, index) => {
            return <TodoListRender key={index} name={item}></TodoListRender>
        })}
    </div>)
}