import React from 'react';
import TodoFormContainer from '../todoForm/TodoFormContainer';
import TodoList from '../todoList/TodoListContainer';

export default class TodoApp extends React.Component {
    render() {
        return (
            <div className="todo">
                <TodoFormContainer />
                <TodoList />
            </div>
        )
    }
}