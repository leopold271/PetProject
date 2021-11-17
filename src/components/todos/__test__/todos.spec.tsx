import React from 'react';
import TodosList from '../todos';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';
import  classes from '../todos.module.css';

it('should render TodosList conponent', () => {
    const component  = shallow(<Provider store={store}><TodosList/></Provider>);
    const wrapper = component.find('#fo');
    expect(wrapper.length).toBe(1)
})