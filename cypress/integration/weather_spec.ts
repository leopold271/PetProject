
import React from 'react';
import { IWeatherInfo } from '../../src/components/weather/weatherCard/weatherInterfaces';
const staticResponse: IWeatherInfo[] = [
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

beforeEach(() => {
    cy.visit('/home')
})

describe('weather request with mocked response', () => {
    it('should get weather info', () => {

        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=f0958b216bf500191d719b09913aa283', staticResponse).as('getWeather')

        cy.get('[data-cy=weather-button]')
            .click()

        cy.wait('@getWeather').its('response.body').should('have.length', 3)

    })
})

describe('weather wrapper appearance', () => {

    it('should be toggled hidden/shown on button click', () => {
        cy.get('[data-cy=weather-box]')
            .should('have.css', 'margin-right', '-250px')
        cy.get('[data-cy=weather-button]')
            .click()
        cy.get('[data-cy=weather-box]')
            .should('have.css', 'margin-right', '0px')
    })
})

describe('real weather request', () => {
    it('should send request and get correct response', () => {
        cy.request('https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=f0958b216bf500191d719b09913aa283')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('city')
                expect(response.body).to.have.property('list')
                expect(response.body.list[0]).to.have.property('dt_txt')
            })
    })
})

