import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodo } from './todoSlice';
import TodoItem from './TodoItem';
import styles from './Todo.module.css';

export function Todo() {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");
  const [todoError, setTodoError] = useState(false);

  function handleAddClick() {
      if(todoInput.length > 0 && todoInput.length < 16) {
        dispatch(addTodo(todoInput));
        setTodoInput("");
      }
  } 

  function handleInputChange(e) {
    if(e.target.value.length > 15) {
      setTodoError(true);
    }
    else {
      setTodoError(false);
    }
    setTodoInput(e.target.value);
  }

  return (
    <div className={styles.todo}>
        <div className={styles.todo__form}>
            <input 
              value={todoInput} 
              onChange={e => handleInputChange(e)} 
              placeholder="Type a todo..."
              className={`${todoError ? styles.error : ""}`}
            />
            <button onClick={() => handleAddClick()}>Add Todo</button>
            <p className={`${styles.todo__error} ${todoError ? styles.active : ""}`}>Length of todo must be less than 15 symbols</p>
        </div>
        <div className={styles.todo__list}> 
            {todo.map(element => <TodoItem 
                                    key={element.id} 
                                    id={element.id} 
                                    date={element.date}
                                    todo={element.todo} 
                                    status={element.status}
            />)}
        </div>  
    </div>
  );
}
