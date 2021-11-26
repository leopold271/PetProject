import React from 'react';
import classes from './doneTodoItem.module.scss'

interface IdoneTodoItemProps {
    id: string,
    text: string
}

const DoneTodoItem = (props: IdoneTodoItemProps) => {

    return(
        <div data-cy='done-todo' className={classes.doneTodoItem}>
            <p className={classes.doneTodoItems__text}>{props.text}</p>
        </div>
    )
}

export default DoneTodoItem;