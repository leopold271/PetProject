import { getByRole, render, screen, fireEvent, cleanup, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Weather from '../weather';
import store from '../../../store';

function renderWeather() {
   const utils = render(<Provider store={store}> <Weather /> </Provider>)
   const weatherBox = utils.getByTestId('weatherBox');
    return{
        ...utils,
        weatherBox
    }
}

test('should not have visible class', () => {  
    const {weatherBox} = renderWeather();
    expect(weatherBox).not.toHaveClass('weatherCards_visible')
})

test('should have visble class on click',  () => {    
    const {weatherBox} = renderWeather();
    const showButton = screen.getByRole('button');
    userEvent.click(showButton);
    expect(weatherBox).toHaveClass('weatherCards_visible');
})

test('should render weatherCards', async () => {
    const {weatherBox} = renderWeather();
    const wetaherCards = await screen.findAllByTestId('weather-card');
    wetaherCards.forEach(w => {
        expect(w).toBeInTheDocument();
    })
})
