import React, { useEffect } from 'react'
import { getWeather } from "./weatherslice";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import WeatherCard from './weatherCard/weatherCard';

const Weather = () => {
    const dispatch = useAppDispatch();
    const days = useAppSelector((state) => state.weather.weatherInfo)
    useEffect(() => {
        dispatch(getWeather())
    }, [])

    const mappedWeatherCards = days.map((day, index) => <WeatherCard day={day} key={index}/>)

    return (
        <div>
            {mappedWeatherCards}
        </div>
    )
}

export default Weather;