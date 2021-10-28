import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
const axios = require('axios').default;

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=f0958b216bf500191d719b09913aa283');
        const dailyData = response.data.list.filter((reading: IWeatherInfo) => reading.dt_txt.includes('18:00:00'))
        console.log('data is loaded', dailyData);
        return dailyData
    } catch (error) {
        console.error(error);
        console.log('err')
    }
})

interface IWeatherInfo {
    clouds: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    },
    pop: number,
    sys: {
        pod: string
    }
    visibility: number,
    weather: [
       {
           id: number,
           main: string,
           description: string,
           icon: string
       } 
    ]
    wind: {
        deg: number
        gust: number
        speed: number
    }
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
                state.weatherInfo.push(action.payload)
            })
    }
})

export default WeatherReducer.reducer;