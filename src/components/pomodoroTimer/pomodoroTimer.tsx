import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import classes from './pomodoroTimer.module.css'

const PomodoroTimer = () => {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isBreakTime, setIsBreakTime] = useState(false)
    const [modalIsShown, setModalIsShown] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = isBreakTime ? 24 : 4;
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setIsBreakTime(!isBreakTime)
                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000)
    }, [seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={classes.pomodoro}>
            <div className={classes.pomodoro_modal}>
                <>
                    <div>
                        {/* <button onClick={() => setModalIsShown(true)}>open modal</button> */}
                        {isBreakTime ? 
                        <Modal open={modalIsShown} onClose={() => setModalIsShown(false)}>
                            Break time! New session starts in: {timerMinutes}:{timerSeconds}
                        </Modal>
                        : 
                        <Modal open={modalIsShown} onClose={() => setModalIsShown(false)} >
                            Time to get to work! Next rest will be after {timerMinutes}:{timerSeconds}
                        </Modal>
                        }
                        
                    </div>
                </>
                {/* {displayMessage && <div>Break time! New session starts in:</div>} */}
            </div>
            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>
        </div>
    )
}

export default PomodoroTimer;