import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo";
import { selectTodoList } from "../../store/selectors";
import { TodoItem } from "..";
import styles from "./index.module.scss";
import classNames from "classnames";

const App = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const [inputValue, setInputValue] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleAddClick = () => {
        if (!hasError) {
            dispatch(addTodo(inputValue));
            setInputValue("");
        }
    };

    const handleInputChange = ({ target: { value } }) => {
        setHasError(value.length === 0 ? true : false);
        setInputValue(value);
    };

    return (
        <div className={styles.todo}>
            <div className={styles.form}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type a todo..."
                    className={classNames(styles.input, {
                        [styles.hasError]: hasError
                    })}
                />
                <button onClick={handleAddClick} className={styles.button}>
                    Add Todo
                </button>
                <p
                    className={classNames(styles.error, {
                        [styles.active]: hasError
                    })}>
                    Length of todo must be less than 15 symbols
                </p>
            </div>
            <div className={styles.list}>
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </div>
        </div>
    );
};

export default App;
