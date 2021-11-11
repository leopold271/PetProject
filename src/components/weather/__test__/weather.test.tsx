import { getByRole, render, screen, fireEvent, cleanup, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Weather from '../weather';
import store from '../../../store';

describe('weather', () => {
    test('should not have visible class', async () => {
        render(<Provider store={store}>
            <Weather />
        </Provider>)
        const weatherBox = await screen.findByTestId('weatherBox');
        expect(weatherBox).not.toHaveClass('weatherCards_visible')
    })
    test('should have visble class on click', async () => {
        render(<Provider store={store}>
            <Weather />
        </Provider>)
        const weatherBox = await screen.findByTestId('weatherBox');
        const showButton = await screen.findByRole('button');
        userEvent.click(showButton);
        expect(weatherBox).toHaveClass('weatherCards_visible');
    })
})