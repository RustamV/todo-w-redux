import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, changeTodo, changeStatus } from '../../store/todoApp/actions'

class TodoItemContainer extends React.Component {
  render() {
    return (
      <TodoItem {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoApp.todoList
  }
}

const mapDispatchToProps = {
    addTodo, deleteTodo, changeTodo, changeStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer)