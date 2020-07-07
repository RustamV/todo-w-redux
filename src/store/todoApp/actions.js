export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'

export const addTodo = todoName => ({
    type: ADD_TODO,
    payload: todoName
})

export const deleteTodo = todoId => ({
    type: DELETE_TODO,
    payload: todoId
})

export const changeTodo = (todoId, todoName) => ({
    type: CHANGE_TODO,
    payload: { id: todoId, name: todoName }
})

export const changeStatus = (todoId, todoStatus) => ({
    type: CHANGE_STATUS,
    payload: { id: todoId, status: todoStatus }
})