import React, { useEffect, FC } from "react";
import ReactDom from 'react-dom';
import classes from './modal.module.css'

interface IProps {
    children: React.ReactNode,
    open: boolean,
    onClose: () => void
}

const Modal: FC<IProps> = ({ children, open, onClose }) => {

    const rootEl = document.getElementById('modal')!;

    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className={classes.overlay}></div>
            <div className={classes.modal}>
                <button onClick={onClose} >close</button>
                {children}
            </div>
        </>
        , rootEl
    )
}

export default Modal;


