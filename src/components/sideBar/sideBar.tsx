import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    return (
        <div>
            <div>
                <NavLink to='home'>Home</NavLink>
            </div>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
        </div>
    )
}

export default SideBar;