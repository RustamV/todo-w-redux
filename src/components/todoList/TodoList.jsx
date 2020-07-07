import React from 'react';

import TodoItem from '../todoItem/TodoItemContainer';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                {this.props.todoList.map((item) => {
                    return <TodoItem key={item.id} name={item.todo} date={item.date} id={item.id} status={item.status}/>
                })}
            </div>
        )
    }
}