import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/todo";
import styles from "./index.module.scss";

const maxInputLength = 15;

const EditForm = ({ id, name, closeEditForm }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(name);
    const [hasError, setHasError] = useState(false);

    const changeTodoState = () => {
        if (inputValue.length > 0 && inputValue.length < maxInputLength + 1) {
            dispatch(editTodo({ id, name: inputValue }));
            closeEditForm();
        } else {
            setHasError(true);
        }
    };

    const handleInputChange = ({ target: { value } }) => {
        setHasError(value.length > maxInputLength || value.length === 0 ? true : false);
        setInputValue(value);
    };

    return (
        <form className={styles.form}>
            <input
                value={inputValue}
                onChange={handleInputChange}
                className={classNames(styles.input, {
                    [styles.hasError]: hasError
                })}
                placeholder="Type a todo..."
            />
            <div className={styles.buttons}>
                <button onClick={changeTodoState} disabled={hasError}>
                    Save
                </button>
                <button onClick={closeEditForm}>Cancel</button>
            </div>
            <p
                className={classNames(styles.error, {
                    [styles.active]: hasError
                })}>
                Length of todo must be less than {`${maxInputLength}`} symbols
            </p>
        </form>
    );
};

export default EditForm;
