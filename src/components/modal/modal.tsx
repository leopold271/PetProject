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
            <div className={classes.overlay} onClick={onClose}></div>
            <div className={classes.modal}>
                {children}
            </div>
        </>
        , rootEl
    )
}

export default Modal;


