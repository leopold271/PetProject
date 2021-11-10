import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./components/todos/todoItem/todoSlice";
import WeatherReducer from "./components/weather/weatherslice";
import pomodoroTimerReducer from './components/pomodoroTimer/pomodoroTimerSlice';

const store = configureStore({
    reducer: {
        weather: WeatherReducer,
        todos: TodoReducer,
        timer: pomodoroTimerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;