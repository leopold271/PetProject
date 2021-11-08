import React, { FC } from "react";
import { IWeatherInfo } from '../weatherCard/weatherInterfaces';
import classes from './weatherCard.module.scss'

interface Iprops {
    day: IWeatherInfo
}

const WeatherCard: FC<Iprops> = ({ day }) => {

    const thisDay = day.dt_txt.split(' '[0])[0];

    return (
        <div className={classes.weatherCard}>
            <p className={classes.date}>{thisDay}</p>
            <p>Temperature: <img src='./980873-200.png' />
                {day.main.temp}</p>
            <p>Feels like: <img src='./3742528-200.png' />
                {day.main.feels_like}</p>
            <p>Humidity: <img src='./1957538-200.png' />
                {day.main.humidity}</p>
            <p>Pressure: <img className={classes.weatherCard_pressureImg} src='./1289313-200.png' />
                {day.main.pressure}</p>
        </div>
    )
}

export default WeatherCard;