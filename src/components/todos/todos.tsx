import React, { useState } from 'react'
import TodoItem from "./todoItem/todoItem";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import { addTodo } from './todoItem/todoSlice';


const TodosList = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.TodoItems);
   
    let renderedTodos = todos.map(t  => (
        <div>
            <TodoItem id={t.id} text={t.todoText} />
        </div>
    ))

    const [newTodoText, setNewTodoText] = useState('');

    const handleClick = () => {
        dispatch(addTodo(newTodoText));
        setNewTodoText('')
    }

    return (
        <div>
            <div>
                <h1>Todos</h1>
                <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}/>
                <button onClick={handleClick}>addTodo</button>
            </div>
            {renderedTodos}
        </div>
    )
}

export default TodosList;