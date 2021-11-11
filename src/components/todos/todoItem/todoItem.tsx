import React, { useState, FC } from 'react';
import classes from './todoItem.module.scss';
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
        <div data-testid='todoEl' className={classes.todoItem}>
            <div className={classes.todoItem__body}>
                <input data-testid='checkbox' className={classes.todoItem__checkbox} type="checkbox" onClick={() => dispatch(moveToDone(id))}/>
                <p className={classes.todoItem__text} >{props.text}</p>
                <button data-testid='delete' className={classes.todoItem__deleteBtn} onClick={() => dispatch(deleteTodo(props.id))} >
                    <img src='/close.png' width='20px' height='20px' alt='delete' />
                </button>
                <button className={classes.todoItem__editBtn} onClick={handleEditButtonClick}>
                    <img src='/icons8-edit-24.png' width='20px' height='20px' alt='edit' />
                </button>
            </div>
            <div className={` ${classes.todoItem__editForm} ${editMode ? classes.todoItem__editFrom_active : ''}`}>
                <textarea className={classes.todoItem__textarea} placeholder='edit here...' value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default TodoItem;