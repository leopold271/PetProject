import React, { useState } from 'react'
import TodoItem from "./todoItem/todoItem";
import DoneTodoItem from './todoItem/doneTodoItem'
import { useAppSelector, useAppDispatch } from '../../appHooks';
import { addTodo, clearAllDoneTodos } from './todoItem/todoSlice';
import classes from './todos.module.css';


const TodosList = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.TodoItems);
    const doneTodos = useAppSelector((state) => state.todos.DoneTodoItems)

    const [newTodoText, setNewTodoText] = useState('');
   
    const renderedTodos = todos.map(t  => (
        <div>
            <TodoItem id={t.id} text={t.todoText} />
        </div>
    ))

    const renderedDoneTodos = doneTodos.map(todo => (
        <div>
            <DoneTodoItem id={todo.id} text={todo.todoText} />
        </div>
    ))
   
    const handleClick = () => {
        dispatch(addTodo(newTodoText));
        setNewTodoText('')
    }

    return (
        <div className={classes.todos}>
            <div>
                <h1>Todos</h1>
                <input className={classes.todos_input} type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}/>
                <button className={classes.todos_addButton} onClick={handleClick} >
                    <img src="icons8Add.png" alt="add" width='20px'/>
                </button>
                
            </div>
            <div className={classes.renderedTodos}>
                {renderedTodos}
            </div>
            <div className={classes.renderedDoneTodos}>
                {renderedDoneTodos}
                <button onClick={() => dispatch(clearAllDoneTodos())}>clear</button>
            </div>
        </div>
    )
}

export default TodosList;