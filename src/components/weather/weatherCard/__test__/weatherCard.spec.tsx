import { mount } from "enzyme";
import { Provider } from "react-redux";
import WeatherCard, { IWeatherCardprops } from "../weatherCard";
import store from '../../../../store';

function setup() {
    const weatherData = {
        temperature: 10,
        date: '05 05 2004',
        humidity: 1000,
        pressure: 2000,
        feelsLike: -2
    } 
    const wrapper = mount(<Provider store={store}>
            <WeatherCard {...weatherData} />
        </Provider>)

    return {
        wrapper, weatherData
    }  
}

describe('should contain weather data', () => {

    const { wrapper, weatherData } = setup()

    test('should render all data fields', () => {
        expect(wrapper.find('p')).toHaveLength(5)
    })

    test('should display passed props', () => {
       expect(wrapper.contains(<p>Temperature: {weatherData.temperature}</p>))
       expect(wrapper.contains(<p>Feels like: {weatherData.feelsLike}</p>))
       expect(wrapper.contains(<p>Humidity: {weatherData.humidity}</p>))
    })
})


