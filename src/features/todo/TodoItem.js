import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, setStatusToDone, setStatusToInProgress, setStatusToFailed, changeTodo } from './todoSlice';
import styles from './Todo.module.css';

export function TodoItem(props) {
    const dispatch = useDispatch();
    const [isTodoEditing, setIsTodoEditing] = useState(false);
    const [inputTodo, setInputTodo] = useState(props.todo);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [todoError, setTodoError] = useState(false);

    function changeTodoState() {
        if(inputTodo.length > 0 && inputTodo.length < 16) {
            dispatch(changeTodo({id: props.id, name: inputTodo}));
            setIsTodoEditing(false);
        }
    }

    function handleInputChange(e) {
        if(e.target.value.length > 15) {
          setTodoError(true);
        }
        else {
          setTodoError(false);
        }
        setInputTodo(e.target.value);
    }
    
    if(!isTodoEditing) {
        return (
            <div className={`${styles.todo__item} ${props.status === "done" ? styles.done : ""} ${props.status === "in progress" ? styles.inprogress : ""} ${props.status === "failed" ? styles.failed : ""}`}>
                <div className={styles.todo__top}>
                    <p>{props.todo}</p>  
                    <div className={styles.todo__dropdown} onClick={() => setIsMenuClicked(!isMenuClicked)}> 
                        <ul className={`${styles.todo__dropdown_hidden} ${isMenuClicked ? styles.active : ""}`}>
                            <li className={styles.todo__edit} onClick={() => setIsTodoEditing(true)}>edit</li>
                            <li className={styles.todo__delete} onClick={() => dispatch(deleteTodo(props.id))}>delete</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.todo__bottom}>
                    <p className={styles.todo__date}>{props.date}</p>
                    <div className={styles.todo__progress}>
                        <button title={"done"} className={`${styles.todo__button} ${styles.todo__button_done}`} onClick={() => dispatch(setStatusToDone(props.id))}></button>
                        <button title={"in progress"} className={`${styles.todo__button} ${styles.todo__button_inprocess}`} onClick={() => dispatch(setStatusToInProgress(props.id))}></button>
                        <button title={"failed"} className={`${styles.todo__button} ${styles.todo__button_failed}`} onClick={() => dispatch(setStatusToFailed(props.id))}></button>
                    </div>
                </div>
            </div>
            
        );
    }
    else {
        return (
            <div className={`${styles.todo__item} ${props.status === "done" ? styles.done : ""} ${props.status === "in progress" ? styles.inprogress : ""} ${props.status === "failed" ? styles.failed : ""}`}>
                <form className={styles.todo__changeform}>
                    <input 
                        value={inputTodo} 
                        onChange={(e => handleInputChange(e))}
                        placeholder="Type a todo..."
                        className={`${todoError ? styles.error : ""}`}
                    />
                    <div className={styles.todo__changebuttons}>
                        <button onClick={() => changeTodoState()}>Save</button>
                        <button onClick={() => setIsTodoEditing(false)}>Cancel</button>
                    </div>
                    <p className={`${styles.todo__changeform_error} ${todoError ? styles.active : ""}`}>Length of todo must be less than 15 symbols</p>
                </form>
            </div>
            
        ); 
    }  
}

export default TodoItem;
