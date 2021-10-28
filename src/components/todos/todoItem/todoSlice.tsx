import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface TodoItems {
    id: string, todoText: string
}

interface TodosState {
    TodoItems: TodoItems[]
}

const initialState: TodosState = {
    TodoItems: [

    ]
}

interface IEditAction {
    type: string,
    payload: {
        id: string,
        content: string
    }
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
        },
        deleteTodo: (state, action) => {
            state.TodoItems = state.TodoItems.filter((todoObj) => {
                return todoObj.id !== action.payload
            })
        },
        editTodo: (state, action: IEditAction) => {
           const {id, content} = action.payload 
           const todoToEdit = state.TodoItems.find(todo => todo.id === id);
           if(todoToEdit) {
               todoToEdit.todoText = content
           }
        }
    }
});

export const { addTodo, deleteTodo, editTodo } = TodoReducer.actions;

export default TodoReducer.reducer;