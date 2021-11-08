import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TodosState, IEditAction, ImoveToDoneAction, IdeleteTodoAction, IAddTodoAction } from './todoInterfaces'


const initialState: TodosState = {
    TodoItems: [],
    DoneTodoItems: []
}

const TodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: IAddTodoAction) => {
            let newTodo = {
                id: nanoid(),
                todoText: action.payload
            }
            state.TodoItems.push(newTodo);
        },
        deleteTodo: (state, action: IdeleteTodoAction) => {
            state.TodoItems = state.TodoItems.filter((todoObj) => {
                return todoObj.id !== action.payload
            })
        },
        editTodo: (state, action: IEditAction) => {
            const { id, editedTodoText } = action.payload
            const todoToEdit = state.TodoItems.find(todo => todo.id === id);
            if (todoToEdit) {
                todoToEdit.todoText = editedTodoText
            }
        },
        moveToDone: (state, action: ImoveToDoneAction) => {
            const doneTodo = state.TodoItems.find(todo => todo.id === action.payload);
            state.TodoItems = state.TodoItems.filter(todo => todo.id !== action.payload)
            state.DoneTodoItems.push(doneTodo!);
        },
        clearAllDoneTodos: (state) => {
            state.DoneTodoItems = []
        }
    }
});

export const { addTodo, deleteTodo, editTodo, moveToDone, clearAllDoneTodos } = TodoReducer.actions;

export default TodoReducer.reducer;