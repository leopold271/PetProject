import React, { useState, FC } from 'react';
import classes from './todoItem.module.css';
import { deleteTodo, editTodo, moveToDone } from './todoSlice';
import { useAppSelector, useAppDispatch } from '../../../appHooks';

interface ITodoItemProps {
    text: string,
    id: string,
}

const TodoItem: FC<ITodoItemProps> = (props) => {

    const {id, text} = props;

    const [editedTodoText, setEditedTodoText] = useState(text);
    const [editMode, setEditMode] = useState(false);

    const handleEditButtonClick = () => {
        dispatch(editTodo({id, editedTodoText}));
        setEditMode(!editMode);
    }

    const dispatch = useAppDispatch();

    return (
        <div className={classes.todoItem}>
            <div>
                <input className={classes.todoItem_checkbox} type="checkbox" onClick={() => dispatch(moveToDone(id))}/>
                <p>{props.text}</p>
                <button onClick={() => dispatch(deleteTodo(props.id))} >
                    <img src='/close.png' width='20px' height='20px' alt='delete' />
                </button>
                <button onClick={handleEditButtonClick}>
                    <img src='/icons8-edit-24.png' width='20px' height='20px' alt='edit' />
                </button>
            </div>
            <div className={`${editMode ? classes.todoItem_editFrom__active : classes.todoItem_editFrom__hidden}`}>
                <textarea value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default TodoItem;