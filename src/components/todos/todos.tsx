import React, { useState } from 'react'
import TodoItem from "./todoItem/todoItem";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import { addTodo } from './todoItem/todoSlice';

const TodosList = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.TodoItems);
   
    let renderedTodos = todos.map(t  => (
        <TodoItem text={t.todoText} />
    ))

    const [newTodoText, setNewTodoText] = useState('');
    console.log(newTodoText)

    return (
        <div>
            <div>
                <h1>Todos</h1>
                <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}/>
                <button onClick={() => dispatch(addTodo(newTodoText))}>addTodo</button>
            </div>
            {renderedTodos}
        </div>
    )
}

export default TodosList;