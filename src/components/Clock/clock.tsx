import React from "react";
import Moment from "react-moment";
import classes from './clock.module.scss'

const Clock = () => {
    return (
        <div className={classes.clock}>
            <Moment format="HH:mm:ss" interval={1000} />
        </div>
    )
}

export default Clock;