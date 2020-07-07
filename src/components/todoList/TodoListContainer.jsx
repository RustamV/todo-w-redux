import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, changeTodo } from '../../store/todoApp/actions'

class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoList {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoApp.todoList,
  }
}

const mapDispatchToProps = {
    addTodo, deleteTodo, changeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)