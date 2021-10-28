import React, {FC} from "react";
import { IWeatherInfo } from '../weatherslice'

interface Iprops {
    day: IWeatherInfo
}

const WeatherCard: FC<Iprops>  = ({day}) => {
    return (
        <div>{day.main.temp}</div>
    )
}

export default WeatherCard;