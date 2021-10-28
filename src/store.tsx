import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./components/todos/todoItem/todoSlice";
import WeatherReducer from "./components/weather/weatherslice";

const store = configureStore({
    reducer: {
        weather: WeatherReducer,
        todos: TodoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;