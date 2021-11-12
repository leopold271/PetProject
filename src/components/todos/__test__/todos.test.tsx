import React, { FC, ReactElement } from 'react'
import { render, screen,  within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodosList from '../todos';
import { Provider } from 'react-redux';
import store from '../../../store';

function renderTodoList() {
    const utils = render(<Provider store={store}><TodosList/></Provider>)
    const addTodoInput = utils.getByPlaceholderText('write your task here...');
    const addTodoButton = utils.getByTestId('addTodoButton');
    const header = utils.getByRole('heading', { name: 'Todos' });
    const deleteAllButton = utils.getByTestId('delete-all');

    const deleteAllTodos = () => {
        userEvent.click(deleteAllButton);
    }

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
        deleteAllButton,
        addTodo,
        deleteAllTodos
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

test('should delete all todo items when deleteAllButton is clicked', () => {
    const { deleteAllTodos } = renderTodoList();
    deleteAllTodos();
    expect(screen.queryByTestId('todoEl')).toBeNull();
})

test('should delete todo item when delete button is clicked', () => {
   const { addTodo, deleteAllTodos } = renderTodoList();
   addTodo(['item to delete']);
   const deleteButton = screen.getByTestId('delete');
   userEvent.click(deleteButton);
   expect(screen.queryByText('item to delete')).toBeNull();
   deleteAllTodos();
})

test('should show text of todo item in edit form', () => {
    const { addTodo, deleteAllTodos } = renderTodoList();
    addTodo(['text to edit']);
    const todoToEdit = screen.getByTestId('todoEl');
    const editButton = within(todoToEdit).getByTestId('edit');
    userEvent.click(editButton);
    expect(screen.getByPlaceholderText('edit here...')).toHaveValue('text to edit');
    deleteAllTodos();
})

test('should delete a todo from todos and insert it in done todos when checkbox is clicked', async () => {
   const { addTodo, deleteAllTodos } = renderTodoList();
   addTodo(['todo to move']);
   const checkbox = screen.getByTestId('checkbox');
   const todoItem = await screen.findByTestId('todoEl');
   expect(todoItem).toBeInTheDocument();
   userEvent.click(checkbox);
   expect(todoItem).not.toBeInTheDocument();
   const doneTodoItem = screen.getByTestId('doneTodoEl');
   expect(doneTodoItem).toBeInTheDocument();
   deleteAllTodos();
   const clearButton = screen.getByText('clear');
   userEvent.click(clearButton);
})

test('clear button should have vivsible class when there are done todos and should not when there are no done todos', () => { 
    const { addTodo, deleteAllTodos } = renderTodoList();
    addTodo(['todo']);
    const clearButton = screen.getByText('clear');
    expect(clearButton).not.toHaveClass('renderedDoneTodos__clearButton_active');
    const checkbox = screen.getByTestId('checkbox');
    userEvent.click(checkbox);
    const doneTodoItem = screen.getByTestId('doneTodoEl');
    expect(doneTodoItem).toBeInTheDocument();
    expect(clearButton).toHaveClass('renderedDoneTodos__clearButton_active');
    deleteAllTodos();
})

test('should delete all done todos when clear button is clicked', async () => {
    const { addTodo, deleteAllTodos } = renderTodoList();
    addTodo(['todo 1', 'todo 2', 'todo 3']);
    const checkboxes = screen.getAllByTestId('checkbox');
    checkboxes.forEach(ch => {
        userEvent.click(ch)
    })
    const todoItems = await screen.findAllByTestId('todoEl');
    waitForElementToBeRemoved(todoItems).then(() => {
        expect(todoItems).not.toBeInTheDocument();
    })
    const doneTodoItems = await screen.findAllByTestId('doneTodoEl');
    doneTodoItems.forEach(d => {
        expect(d).toBeInTheDocument();
    })
    const clearButton = screen.getByText('clear');
    userEvent.click(clearButton);
    doneTodoItems.forEach(d => {
        expect(d).not.toBeInTheDocument();
    }) 
    deleteAllTodos();
})










