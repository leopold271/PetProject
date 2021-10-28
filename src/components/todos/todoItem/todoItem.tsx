import React from 'react';

interface todoItemProps {
    text: string
}

const TodoItem = (props: todoItemProps) => {
    return (     
        <div>
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem;