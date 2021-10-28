import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';


interface TodoItems {
    id: string, todoText: string
}

interface TodosState {
    TodoItems: TodoItems[]
}

const initialState: TodosState = {
    TodoItems: [
        { id: '1', todoText: 'sometext' },
        { id: '2', todoText: 'sometext' },
        { id: '3', todoText: 'sometext' }
    ]
}

const TodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            let newTodo = {
                id: nanoid(),
                todoText: action.payload
            }
            state.TodoItems.push(newTodo);
        }
    }
});

export const { addTodo } = TodoReducer.actions;

export default TodoReducer.reducer;