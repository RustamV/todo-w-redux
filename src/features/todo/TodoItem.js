import React, { useState }  from 'react';
import styles from './Todo.module.css';

export function TodoItem(props) {
    const [isTodoEditing, setIsTodoEditing] = useState(false);
    const [todo, setTodo] = useState(props.todo);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    if(!isTodoEditing) {
        return (
            <div className={`${styles.todo__itemwrap} ${props.status === "done" ? styles.done : ""} ${props.status === "in progress" ? styles.inprogress : ""} ${props.status === "failed" ? styles.failed : ""}`}>
                <div className={styles.todo__item}>
                    <div className={styles.todo__top}>
                        <p>{todo}</p>  
                        <div className={styles.todo__dropdown} onClick={() => setIsMenuClicked(!isMenuClicked)}> 
                            <ul 
                                className={`${styles.todo__dropdown_hidden} ${isMenuClicked ? styles.active : ""}`}
                                
                            >
                                <li className={styles.todo__edit} onClick={() => setIsTodoEditing(true)}>edit</li>
                                <li className={styles.todo__delete} onClick={() => props.deleteTodo(props.id)}>delete</li>
                            </ul>
                        </div> 
                        
                    </div>
                    <div className={styles.todo__bottom}>
                        <div className={styles.todo__date}>
                            14.05.2020
                        </div>
                        <div className={styles.todo__progress}>
                            <button className={`${styles.todo__button} ${styles.todo__button_done}`} onClick={() => props.setStatusToDone(props.id)}></button>
                            <button className={`${styles.todo__button} ${styles.todo__button_inprocess}`} onClick={() => props.setStatusToInProgress(props.id)}></button>
                            <button className={`${styles.todo__button} ${styles.todo__button_failed}`} onClick={() => props.setStatusToFailed(props.id)}></button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        );
    }
    else {
        return (
            <div className={styles.todo__itemwrap}>
                <div className={styles.todo__item}>
                    <input value={todo} onChange={e => setTodo(e.target.value)}/>
                    <button onClick={() => setIsTodoEditing(false)}>Save</button>
                    <button onClick={() => setIsTodoEditing(false)}>Cancel</button>
                </div>
            </div>
            
        ); 
    }  
}

export default TodoItem;
