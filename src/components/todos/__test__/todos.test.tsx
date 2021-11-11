import React, { FC, ReactElement } from 'react'
import { getByRole, render, screen, getByText, getAllByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodosList from '../todos';
import { Provider } from 'react-redux';
import store from '../../../store';
import { addTodo } from '../todoItem/todoSlice';
import { die } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import { add } from 'lodash';

// const setup = () => {
//     const utils = render(<Provider store={store}>
//         <TodosList />
//     </Provider>)
//     const addTodoInput = utils.getByPlaceholderText('write your task here...');
//     const addTodoButton = utils.getByTestId('addTodoButton');
//     const header = utils.getByRole('heading', { name: 'Todos' })
    
//     const addTodo = (todos: string[]) => {
//         todos.forEach(todo => {
//             userEvent.type(addTodoInput, todo);
//             userEvent.click(addTodoButton);
//         })
//     }
//     return {
//         addTodoButton,
//         addTodoInput,
//         header,
//         addTodo,
//         ...utils
//     }
// }

// test('renders h1', () => {
//     const { header } = setup();
//     expect(header).toBeInTheDocument();
// })

// describe('addTodosInput', () => {
//     test('should render input', () => {
//         const { addTodoInput } = setup();
//         expect(addTodoInput).toBeInTheDocument();
//     });
//     test('should be able to type in input', () => {
//         const { addTodoInput } = setup();
//         userEvent.type(addTodoInput, 'go to sleep')
//         expect(addTodoInput).toHaveValue('go to sleep')
//     });
//     test('input should be empty when button is clicked', () => {
//         const { addTodoInput, addTodoButton } = setup();
//         userEvent.click(addTodoButton);
//         expect(addTodoInput).toHaveValue('');
//     })
// })

// describe('Todo', () => {
//     test('should render todoItem when button is clicked', () => {
//         const { addTodo } = setup();
//         addTodo(['some text']);
//         expect(screen.getByText('some text', {selector: 'p'})).toBeInTheDocument;
//     })
//     test('todoItem should not be present in the document when delete button is clicked', () => {
//         // const { addTodo } = setup();
//         // addTodo(['todo to delete'])
//         const deleteButton = screen.getByTestId('delete');
//     })
//     // test('should render n todoItems when button clicked n times', () => {
//     //     const {addTodo} = setup();
//     //     addTodo(['w','a','s']);
//     //     expect(screen.getAllByTestId('todoEl')).toBe(3)
//     // })
//     test('todoItem should not be in todos when checkbox is clicked', async () => {
//         // const { addTodo } = setup();
//         // addTodo(['s'])
//         // const checkBox = await screen.findByTestId('checkbox');
//     })
// })

function renderTodoList() {
    const utils = render(<Provider store={store}><TodosList/></Provider>)
    const addTodoInput = utils.getByPlaceholderText('write your task here...');
    const addTodoButton = utils.getByTestId('addTodoButton');
    const header = utils.getByRole('heading', { name: 'Todos' })
    const addTodo = (todos: string[]) => {
        todos.forEach(todo => {
            userEvent.type(addTodoInput, todo);
            userEvent.click(addTodoButton);
        })
    }

    return {
        ...utils,
        addTodoInput,
        addTodoButton,
        header,
        addTodo
    }
}


test('should render header', () => {
    const { header } = renderTodoList()
    expect(header).toBeInTheDocument()
})

test('should render input', () => {
    const { addTodoInput } = renderTodoList();
    expect(addTodoInput).toBeInTheDocument();
})

test('should be able to type inside input', () => {
    const { addTodoInput } = renderTodoList();
    userEvent.type(addTodoInput, 'some text');
    expect(addTodoInput).toHaveValue('some text');
})

test('input should be empty after addButton is clicked', () => {
    const { addTodoInput, addTodoButton } = renderTodoList();
    userEvent.type(addTodoInput, 'some text');
    userEvent.click(addTodoButton);
    expect(addTodoInput).toHaveValue('');
})

test('should render a todo item when addButton is clicked', () => {
    const { addTodo } = renderTodoList();
    addTodo(['render a todo']);
    const addedTodoParagraph = screen.getByText('render a todo', {selector: 'p'})
    expect(addedTodoParagraph).toBeInTheDocument();
})

test('should delete todo item when delete button is clicked', () => {
   
})




