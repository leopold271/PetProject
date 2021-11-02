import React from 'react';

interface IAxiosResponseCityCoord {
    lat: number
    lon: number
}

interface IAxiosResponseCity {
    coord: IAxiosResponseCityCoord
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}

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

export interface IdailyData {
    dailyData: IWeatherInfo[]
}

export interface IAxiosGetResponse {
    city: IAxiosResponseCity
    cnt: number
    cod: string
    list: IWeatherInfo[]
    message: string
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

export interface WeatherState {
    weatherInfo: IWeatherInfo[]
}
export interface IShowMoreAction {
    payload: boolean
}