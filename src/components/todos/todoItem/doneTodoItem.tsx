import React from 'react';

interface IdoneTodoItemProps {
    id: string,
    text: string
}

const DoneTodoItem = (props: IdoneTodoItemProps) => {

    return(
        <div>
            {props.text}
            <img src="icons8-ok-24.png" width='15px' height='15px' alt="ok" />
        </div>
    )
}

export default DoneTodoItem;