import { createSlice } from "@reduxjs/toolkit";

interface IState {
    timerSeconds: number,
    timerMinutes: number
}

interface ISetSecondsOrMinutesAction {
    type: string,
    payload: number
}


const initialState: IState = {
    timerSeconds: 0,
    timerMinutes: 25
}

const pomodoroTimerReducer = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        setSeconds: (state, action: ISetSecondsOrMinutesAction) => {
            state.timerSeconds = action.payload;
        },
        setMinutes : (state, action: ISetSecondsOrMinutesAction) => {
            state.timerMinutes = action.payload;
        }
    }
})

export const {setSeconds, setMinutes} = pomodoroTimerReducer.actions;

export default pomodoroTimerReducer.reducer;