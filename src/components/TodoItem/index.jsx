import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, editStatus } from "../../store/todo";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { name, date, id, status } = todo;
    const [inputValue, setInputValue] = useState(name);
    const [hasError, setHasError] = useState(false);
    const [isTodoEditing, setIsTodoEditing] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const changeTodoState = () => {
        if (inputValue.length > 0 && inputValue.length < 16) {
            dispatch(editTodo({ id, name: inputValue }));
            setIsTodoEditing(false);
        } else {
            setHasError(true);
        }
    };

    const handleInputChange = ({ target: { value } }) => {
        if (value.length > 15 || value.length === 0) {
            setHasError(true);
        } else {
            setHasError(false);
        }
        setInputValue(value);
    };

    return isTodoEditing ? (
        <div className={"todo-item"}>
            <form className={"todo-item__changeform"}>
                <input value={inputValue} onChange={handleInputChange} placeholder="Type a todo..." className={""} />
                <div className={"todo-item__changebuttons"}>
                    <button onClick={changeTodoState} disabled={hasError}>
                        Save
                    </button>
                    <button onClick={() => setIsTodoEditing(false)}>Cancel</button>
                </div>
                <p className={`todo-item--error ${hasError ? "active" : ""}`}>
                    Length of todo must be less than 15 symbols
                </p>
            </form>
        </div>
    ) : (
        <div
            className={`todo-item ${
                status === "done"
                    ? "todo-item--done"
                    : status === "in progress"
                    ? "todo-item--inprocess"
                    : status === "failed"
                    ? "todo-item--failed"
                    : ""
            }`}>
            <div className={"todo-item__top"}>
                <p>{name}</p>
                <div className={"todo-item__dropdown"} onClick={() => setIsMenuClicked((prev) => !prev)}>
                    <ul className={`todo-item__dropdown--hidden ${isMenuClicked ? "active" : ""}`}>
                        <li className={"todo-item__edit"} onClick={() => setIsTodoEditing(true)}>
                            edit
                        </li>
                        <li className={"todo-item__delete"} onClick={() => dispatch(deleteTodo(id))}>
                            delete
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"todo-item__bottom"}>
                <p className={"todo-item__date"}>{date}</p>
                <div className={"todo-item__progress"}>
                    <button
                        title={"done"}
                        className={"todo-item__button todo-item__button--done"}
                        onClick={() => dispatch(editStatus({ id, status: 0 }))}></button>
                    <button
                        title={"in progress"}
                        className={"todo-item__button todo-item__button--inprocess"}
                        onClick={() => dispatch(editStatus({ id, status: 1 }))}></button>
                    <button
                        title={"failed"}
                        className={"todo-item__button todo-item__button--failed"}
                        onClick={() => dispatch(editStatus({ id, status: 2 }))}></button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
