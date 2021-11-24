import { rest } from 'msw';
import { IWeatherInfo } from '../components/weather/weatherCard/weatherInterfaces';

const response: IWeatherInfo[] = [
    {
        clouds: {
            all: 3
        },
        dt: 2,
        dt_txt: '11-11-2021',
        main: {
            feels_like: 33,
            grnd_level: 33,
            humidity: 33,
            pressure: 33,
            sea_level: 33,
            temp: 33,
            temp_kf: 33,
            temp_max: 33,
            temp_min: 33
        },
        pop: 2,
        sys: {
            pod: 'ss'
        },
        visibility: 3,
        weather: [
            {
                id: 2,
                main: 'maim',
                description: 'some description',
                icon: 'some icon'
            }
        ],
        wind: {
            deg: 4,
            gust: 3,
            speed: 5
        }
    },
    {
        clouds: {
            all: 3
        },
        dt: 2,
        dt_txt: '11-11-2021',
        main: {
            feels_like: 33,
            grnd_level: 33,
            humidity: 33,
            pressure: 33,
            sea_level: 33,
            temp: 33,
            temp_kf: 33,
            temp_max: 33,
            temp_min: 33
        },
        pop: 2,
        sys: {
            pod: 'ss'
        },
        visibility: 3,
        weather: [
            {
                id: 2,
                main: 'maim',
                description: 'some description',
                icon: 'some icon'
            }
        ],
        wind: {
            deg: 4,
            gust: 3,
            speed: 5
        }
    },
    {
        clouds: {
            all: 3
        },
        dt: 2,
        dt_txt: '11-11-2021',
        main: {
            feels_like: 33,
            grnd_level: 33,
            humidity: 33,
            pressure: 33,
            sea_level: 33,
            temp: 33,
            temp_kf: 33,
            temp_max: 33,
            temp_min: 33
        },
        pop: 2,
        sys: {
            pod: 'ss'
        },
        visibility: 3,
        weather: [
            {
                id: 2,
                main: 'maim',
                description: 'some description',
                icon: 'some icon'
            }
        ],
        wind: {
            deg: 4,
            gust: 3,
            speed: 5
        }
    }
]

export const getFakeWeather = () => new Promise<IWeatherInfo[]>((resolve) => resolve(response));

  