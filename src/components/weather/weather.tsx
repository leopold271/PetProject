import React, { useEffect, useState } from 'react'
import { getWeather } from "./weatherslice";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import WeatherCard from './weatherCard/weatherCard';
import classes from './weather.module.scss'

const Weather = () => {
    const dispatch = useAppDispatch();
    const days = useAppSelector((state) => state.weather.weatherInfo);

    const [isShown, setIsShown] = useState(false);


    useEffect(() => {
        dispatch(getWeather())
    }, [])

    const mappedWeatherCards = days.map((day, index) => <WeatherCard day={day} key={index} />)

    return (
        <div data-testid='weatherBox' className={`${classes.weatherCards} ${isShown ? classes.weatherCards_visible : ''} `}>
            <div className={classes.weatherCards__content}>
                <button className={classes.weatherCards__menuButton} onClick={() => setIsShown(!isShown)}>
                    <img className={classes.weatherCards__menuButtonImg} src="./icons8-weather-50.png" alt="show weather" />
                </button>
                <div>
                    {mappedWeatherCards}
                </div>
            </div>
        </div>
    )
}

export default Weather;