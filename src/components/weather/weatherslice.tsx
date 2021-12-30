import { createSlice } from '@reduxjs/toolkit';
import { WeatherState } from './weatherCard/weatherInterfaces';
import { getWeather } from '../../services';

const initialState: WeatherState = {
    weatherInfo: []
}

const WeatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                if (action.payload) {
                    state.weatherInfo = action.payload
                }
            })
    }
})

export const { } = WeatherReducer.actions;

export default WeatherReducer.reducer;