import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../appHooks";
import { setSeconds, setMinutes } from './pomodoroTimerSlice'
import Modal from "../modal/modal";
import classes from './pomodoroTimer.module.scss'

const PomodoroTimer = () => {

    // const [minutes, setMinutes] = useState(25);
    // const [seconds, setSeconds] = useState(0);
    const [isBreakTime, setIsBreakTime] = useState(false)
    const [modalIsShown, setModalIsShown] = useState(false);

    const seconds = useAppSelector((state) => state.timer.timerSeconds);
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds 
    const minutes = useAppSelector((state) => state.timer.timerMinutes);
    const timerMinutes =  minutes < 10 ? `0${minutes}` : minutes;
    const dispatch = useAppDispatch();

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                if (minutes !== 0) {
                    // setSeconds(59);
                    // setMinutes(minutes - 1);
                    dispatch(setSeconds(59));
                    dispatch(setMinutes(minutes - 1));

                } else {
                    // let minutes = isBreakTime ? 24 : 4;
                    // let seconds = 59

                    dispatch(setSeconds(59));
                    dispatch(setMinutes(isBreakTime ? 24 : 4))

                    // setSeconds(seconds);
                    // setMinutes(minutes);
                    setIsBreakTime(!isBreakTime);
                    setModalIsShown(!modalIsShown);
                }
            } else {
                // setSeconds(seconds - 1)
                dispatch(setSeconds(seconds - 1))
            }
        }, 1000)
    }, [seconds])


    // const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    // const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={classes.pomodoro}>
            <div className={classes.pomodoroModals}>
                {isBreakTime ?
                    <Modal open={modalIsShown} onClose={() => setModalIsShown(false)}>
                        <div className={classes.breakTimer}>
                            <h3 className={classes.breakTimer__header}>Break time! New session starts in: </h3>
                            <p className={classes.breakTimer__timer}>{timerMinutes}:{timerSeconds}</p>
                        </div>
                    </Modal>
                    :
                    <Modal open={modalIsShown} onClose={() => setModalIsShown(false)} >
                        <div className={classes.breakTimer}>
                            <h3 className={classes.breakTimer__header}>Time to get to work! Next rest will be after: </h3>
                            <p className={classes.breakTimer__timer}>{timerMinutes}:{timerSeconds}</p>
                        </div>
                    </Modal>
                }
            </div>
            <div className={classes.mainTimer}>
                <img className={classes.mainTimer__img} src="pomodoroTimer.png" width='150px' alt="pomodoro.png" />
                <div className={classes.mainTimer__timer}>
                    {timerMinutes}:{timerSeconds}
                </div>
                
            </div>
        </div>
    )
}

export default PomodoroTimer;