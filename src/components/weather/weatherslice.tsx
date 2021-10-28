import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IdailyData {
    dailyData: IWeatherInfo[]
}

// <AxiosRequestConfig, AxiosResponse<IWeatherInfo[]>>

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=f0958b216bf500191d719b09913aa283');
        const dailyData = response.data.list.filter((reading: IWeatherInfo) => reading.dt_txt.includes('18:00:00'))
        return dailyData
    } catch (error) {
        console.error(error);
    }
})

interface clouds {
    all: number
}

interface main {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number
}

interface sys {
    pod: string
}

interface Iweather {
    id: number,
            main: string,
            description: string,
            icon: string
}

interface wind {
    deg: number
    gust: number
    speed: number
}

export interface IWeatherInfo {
    clouds: clouds,
    dt: number,
    dt_txt: string,
    main: main,
    pop: number,
    sys: sys
    visibility: number,
    weather: Iweather[]
    wind: wind
}

interface WeatherState {
    weatherInfo: IWeatherInfo[]
}

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
                state.weatherInfo = action.payload
            })
    }
})

export default WeatherReducer.reducer;