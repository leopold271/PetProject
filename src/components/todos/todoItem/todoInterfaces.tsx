interface TodoItems {
    id: string, todoText: string
}

export interface TodosState {
    TodoItems: TodoItems[],
    DoneTodoItems: TodoItems[]
}

export interface IEditAction {
    type: string,
    payload: {
        id: string,
        editedTodoText: string
    }
}

export interface ImoveToDoneAction {
    payload: string
}

export interface IdeleteTodoAction{
    payload: string
}

export interface IAddTodoAction{
    payload: string
}