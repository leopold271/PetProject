import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div>
                <NavLink to='/weather'>Weather</NavLink>
            </div>
            <div>
                <NavLink to='/todos'>Todos</NavLink>
            </div>
            <div>
                <NavLink to='/pomodoro-timer'>Pomodoro Timer</NavLink>
            </div>
        </div>
    )
}

export default Navbar;