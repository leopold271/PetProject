import React, { FC, ReactElement } from 'react'
import { getByRole, render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodosList from '../todos';
import { Provider } from 'react-redux';
import store from '../../../store';


test('renders h1', () => {
    render(<Provider store={store}>
        <TodosList />
    </Provider>);
    const header = screen.getByRole('heading', { name: 'Todos' })
    expect(header).toBeInTheDocument();
})


const setup = () => {
    const utils = render(<Provider store={store}>
        <TodosList />
    </Provider>)
    const addTodoInput = utils.getByPlaceholderText('write your task here...');
    const addTodoButton = utils.getByTestId('addTodoButton');
    
    const addTodo = (todos: string[]) => {
        todos.forEach(todo => {
            userEvent.type(addTodoInput, todo);
            userEvent.click(addTodoButton);
        })
    }
    return {
        addTodoButton,
        addTodoInput,
        addTodo,
        ...utils
    }
}

describe('addTodosInput', () => {
    test('should render input', () => {
        const { addTodoInput } = setup();
        expect(addTodoInput).toBeInTheDocument();
    });
    test('should be able to type in input', () => {
        const { addTodoInput } = setup();
        userEvent.type(addTodoInput, 'go to sleep')
        expect(addTodoInput).toHaveValue('go to sleep')
    });
    test('input should be empty when button is clicked', () => {
        const { addTodoInput, addTodoButton } = setup();
        userEvent.click(addTodoButton);
        expect(addTodoInput).toHaveValue('');
    })
})

describe('Todo', () => {
    // test('should render a child',  () => {
    //     render(<Provider store={store}><TodosList/></Provider>);       
    //     const addTodoInput = screen.getByPlaceholderText('write your task here...');
    //     const addTodoButton = screen.getByTestId('addTodoButton');
    //     userEvent.type(addTodoInput, 'some text');
    //     userEvent.click(addTodoButton);
    //     const todoEl = screen.getByTestId('todoEl');
    //     expect(todoEl).toBeInTheDocument();
    // })
    // test('should render multiple components', () => {
    //     const { addTodo } = setup();
    //     addTodo(['', '', '']);
    //     const pEls = screen.getAllByTestId('todoEl');
    //     expect(pEls.length).toBe(3);
    // }) // does not work
    // test('should not be present when checkbox is clicked', () => {
    //     const { addTodo } = setup();
    //     addTodo(['some text']);
    //     const checkBox = screen.getByTestId('checkbox');
    //     userEvent.click(checkBox);
    //     const el = screen.getByText('some text');
    // })
})

