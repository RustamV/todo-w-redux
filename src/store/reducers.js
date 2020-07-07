import { combineReducers } from 'redux'

import { todoReducer } from './todoApp/reducers'

export default combineReducers({
    todoApp: todoReducer
});