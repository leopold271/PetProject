import React, { useEffect, useState } from 'react'
import { getWeather } from "./weatherslice";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import WeatherCard from './weatherCard/weatherCard';
import classes from './weather.module.css'

const Weather = () => {
    const dispatch = useAppDispatch();
    const days = useAppSelector((state) => state.weather.weatherInfo);

    const [isExpanded, setIsExpanded] = useState(false);
    const [isShown, setIsShown] = useState(false);


    useEffect(() => {
        dispatch(getWeather())
    }, [])

    const mappedWeatherCards = days.map((day, index) => <WeatherCard day={day} key={index} />)

    return (
        <div className={`${classes.weatherCards} ${isShown ? classes.weatherCards__visible : ''} `}>
            <div className={classes.weatherCards_content}>
                <button className={classes.weatherCards_menuButton} onClick={() => setIsShown(!isShown)}>
                    <img className={classes.weatherCards_menuButtonImg} src="./icons8-weather-50.png" alt="show weather" />
                </button>
                <div>
                    {mappedWeatherCards}
                </div>
            </div>
        </div>
    )
}

export default Weather;