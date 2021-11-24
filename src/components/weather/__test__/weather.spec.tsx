import { mount } from "enzyme";
import { Provider } from "react-redux";
import Weather from '../weather';
import store from '../../../store';
import WeatherCard from "../weatherCard/weatherCard";
import { getFakeWeather } from "../../../mocks/handlers";

function setup() {
    const wrapper = mount(<Provider store={store}>
        <Weather />
    </Provider>)
    return {
        wrapper
    }
}

describe('button should work', () => {
    const { wrapper } = setup();

    test('should add class when button is clicked', () => {
        expect(wrapper.exists('.weatherCards__menuButton')).toEqual(true);
    })

    test('class of wrapper should be changed when button is clicked', () => {
        const button = wrapper.find('.weatherCards__menuButton');
        button.simulate('click');
        expect(button.hasClass('weatherCards_visible'));
    })
})


describe('should render weather info', () => {
    const { wrapper } = setup();

    test('should render container fo weather cards', () => {
        expect(wrapper.exists('.weatherCardsContainer')).toEqual(true)
    })
})

describe('async query result display', () => {
    const wrapper = mount(<Provider store={store}>
        <Weather />
    </Provider>)
    

    test('renders correct info got by async query and passed via props', async () => {

        expect(wrapper.find('.weatherCard').length).toEqual(0);

        const button = wrapper.find('.weatherCards__menuButton');
        button.simulate('click');

        const weather = await getFakeWeather();

        const wrapperCard = mount(<WeatherCard temperature={weather[0].main.temp} date={weather[0].dt_txt} humidity={weather[0].main.humidity} pressure={weather[0].main.pressure} feelsLike={weather[0].main.feels_like}/>)
        expect(wrapperCard.exists('.weatherCard')).toEqual(true);
        expect(wrapperCard.find('#feels-like').text()).toEqual('Feels like: 33');
    })
})


