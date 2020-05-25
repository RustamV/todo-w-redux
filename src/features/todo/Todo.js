import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, setStatusToDone, setStatusToInProgress, setStatusToFailed, selectTodo } from './todoSlice';
import TodoItem from './TodoItem';
import styles from './Todo.module.css';

export function Todo() {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  function handleAddClick() {
      if(todoInput.length > 0) {
        dispatch(addTodo(todoInput));
        setTodoInput("");
      }
  } 

  return (
    <div className={styles.todo}>
        <div className={styles.todo__form}>
            <input value={todoInput} onChange={e => setTodoInput(e.target.value)} placeholder="Type a todo..."/>
            <button onClick={() => handleAddClick()}>Add Todo</button>
        </div>
        <div className={styles.todo__list}> 
            {todo.map(element => <TodoItem 
                                    key={element.id} 
                                    id={element.id} 
                                    todo={element.todo} 
                                    status={element.status}
                                    setStatusToDone={() => dispatch(setStatusToDone(element.id))}
                                    setStatusToInProgress={() => dispatch(setStatusToInProgress(element.id))}
                                    setStatusToFailed={() => dispatch(setStatusToFailed(element.id))}
                                    deleteTodo={() => dispatch(deleteTodo(element.id))}
            />)}
        </div>  
    </div>
  );
}
