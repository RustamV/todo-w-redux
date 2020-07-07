import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';

import { addTodo } from '../../store/todoApp/actions'

class TodoFormContainer extends React.Component {
  render() {
    return (
      <TodoForm {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoApp.todoList,
  }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer)