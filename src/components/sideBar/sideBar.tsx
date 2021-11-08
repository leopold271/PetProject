import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './sideBar.module.scss'

const SideBar = () => {

    return (
        <div className={classes.sideBar}>
            <div className={classes.sideBar__item}>
                <NavLink className={classes.sideBar_link} to='home'>Home</NavLink>
            </div>
            <div className={classes.sideBar__item}>
                <NavLink className={classes.sideBar_link} to='/profile'>Profile</NavLink>
            </div>
        </div>
    )
}

export default SideBar;