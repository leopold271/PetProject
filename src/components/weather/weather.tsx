import React, { useEffect, useState } from 'react'
import { getWeather } from "../../services";
import { useAppSelector, useAppDispatch } from '../../appHooks';
import WeatherCard from './weatherCard/weatherCard';
import classes from './weather.module.scss';

const Weather = () => {
    const dispatch = useAppDispatch();
    const days = useAppSelector((state) => state.weather.weatherInfo);
    
    const [isShown, setIsShown] = useState(false);

    // useEffect(() => {
    //     dispatch(getWeather())
    // }, [])

    const handleWeatherButtonClick = () => {
        dispatch(getWeather());
        setIsShown(!isShown)
    }

    const mappedWeatherCards = days.map((day, index) => <WeatherCard date={day.dt_txt} humidity={day.main.humidity} pressure={day.main.pressure} feelsLike={day.main.feels_like} temperature={day.main.temp} key={index} />)

    return (
        <div data-cy='weather-box' className={`${classes.weatherCards} ${isShown ? classes.weatherCards_visible : ''} `}>
            <div className={classes.weatherCards__content}>
                <button data-cy='weather-button' className={classes.weatherCards__menuButton} onClick={handleWeatherButtonClick}>
                    <img className={classes.weatherCards__menuButtonImg} src="./icons8-weather-50.png" alt="show weather" />
                </button>
                <div className={classes.weatherCardsContainer}>
                    {mappedWeatherCards}
                </div>
            </div>
        </div>
    )
}

export default Weather;