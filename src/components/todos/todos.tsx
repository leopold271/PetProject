import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import TodoItem from "./todoItem/todoItem";
import DoneTodoItem from './todoItem/doneTodoItem'
import { useAppSelector, useAppDispatch } from '../../appHooks';
import { addTodo, clearAllDoneTodos, deleteAllTodos } from './todoItem/todoSlice';
import classes from './todos.module.scss';


const TodosList = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.TodoItems);
    const doneTodos = useAppSelector((state) => state.todos.DoneTodoItems)

    const [newTodoText, setNewTodoText] = useState('');
    const [isBtnActive, setIsBtnActive] = useState(false);
    const [isRenderedDoneTodosEmpty, setIsRenderedDoneTodosEmpty] = useState(true);

    useEffect(() => {
        if(doneTodos.length === 0) {
            setIsBtnActive(false)
        } else {
            setIsBtnActive(true)
        }
    })
  
    const renderedTodos = todos.map(t => (
        <div >
            <TodoItem key={t.todoText} id={t.id} text={t.todoText} />
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

    useEffect(() => {
        if(renderedDoneTodos.length > 0) {
            setIsRenderedDoneTodosEmpty(false)
        } else {
            setIsRenderedDoneTodosEmpty(true)
        }
    })

    return (
        <div id='foo' className={classes.todos}>
            <div className={classes.todos__content}>
                <h1 className={classes.todos__header}>Todos</h1>
                <div className={classes.todos__enterings}>
                    <input className={classes.todos__input} type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} 
                    placeholder='write your task here...'/>
                    <button data-testid='addTodoButton' className={classes.todos__addButton} onClick={handleClick} >
                        <img className={classes.todos__addButtonImage} src="icons8Add.png" alt="add" width='20px' />
                    </button>
                    <button data-testid='delete-all' className={classes.todos__deleteAllButton} onClick={() => dispatch(deleteAllTodos())}>
                        <img className={classes.todos__deleteAllButtomImage} width='20px' src="bin.png" alt="deleteAll" />
                    </button>
                </div>
            </div>
            <div className={classes.renderedTodos}>
                {renderedTodos}
            </div>
            <div className={`${classes.renderedDoneTodos} ${isRenderedDoneTodosEmpty ? null : classes.renderedDoneTodos_withBorder}`}>
                {renderedDoneTodos}
                <button className={`${classes.renderedDoneTodos__clearButton} ${isBtnActive ? classes.renderedDoneTodos__clearButton_active : null}`} onClick={() => dispatch(clearAllDoneTodos())}>clear</button>
            </div>
        </div>
    )
}

export default TodosList;