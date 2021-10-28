import React from 'react';
import classes from './todoItem.module.css';
import { deleteTodo, editTodo } from './todoSlice';
import { useAppSelector, useAppDispatch } from '../../../appHooks';


interface todoItemProps {
    text: string,
    id: string
}

const TodoItem = (props: todoItemProps) => {

    const dispatch = useAppDispatch();

    const {id, text} = props

    return (
        <div className={classes.todoItem}>
            <input type="checkbox" />
            <p>{props.text}</p>
            <button onClick={() => dispatch(deleteTodo(props.id))} >
                <img src='/close.png' width='20px' height='20px' alt='delete' />
            </button>
            <button onClick={() => dispatch(editTodo({id, content: text}))}>
                <img src='/icons8-edit-24.png' width='20px' height='20px' alt='edit' />
            </button>
        </div>
    )
}

export default TodoItem;