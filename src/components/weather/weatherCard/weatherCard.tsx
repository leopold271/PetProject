import moment from "moment";
import React, { FC } from "react";
import { IWeatherInfo } from '../weatherCard/weatherInterfaces';
import classes from './weatherCard.module.scss'

export interface IWeatherCardprops {
    temperature: number,
    date: string,
    humidity: number,
    pressure: number,
    feelsLike: number
}

const WeatherCard: FC<IWeatherCardprops> = ({ temperature, feelsLike, humidity, pressure, date}) => {

    const thisDay = date.split(' '[0])[0];
    const formattedtThisDay = moment(thisDay).format('Do MMMM YYYY');

    return (
        <div data-testid='weather-card' className={classes.weatherCard}>
            <p className={classes.date}>{formattedtThisDay}</p>
            <p>Temperature: <img src='./980873-200.png' />
                {temperature}</p>
            <p id='feels-like'>Feels like: <img src='./3742528-200.png' />
                {feelsLike}</p>
            <p>Humidity: <img src='./1957538-200.png' />
                {humidity}</p>
            <p>Pressure: <img className={classes.weatherCard_pressureImg} src='./1289313-200.png' />
                {pressure}</p>
        </div>
    )
}

export default WeatherCard;