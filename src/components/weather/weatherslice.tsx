import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IWeatherInfo, WeatherState, IAxiosGetResponse, IShowMoreAction } from './weatherCard/weatherInterfaces';


export const getWeather = createAsyncThunk('weather/getWeather', async () => {
    try {
        const response = await axios.get<AxiosRequestConfig, AxiosResponse<IAxiosGetResponse>>('https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=f0958b216bf500191d719b09913aa283');
        console.log(response)
        const dailyData = response.data.list.filter((reading: IWeatherInfo) => reading.dt_txt.includes('18:00:00')).slice(0,3);
        console.log(dailyData)
        return dailyData
    } catch (error) {
        console.error(error);
    }
})

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
                if(action.payload) {
                    state.weatherInfo = action.payload
                }
            })
    }
})

export const { } = WeatherReducer.actions;

export default WeatherReducer.reducer;