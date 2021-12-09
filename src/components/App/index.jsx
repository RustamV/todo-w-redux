import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo";
import { selectTodoList } from "../../store/selectors";
import { TodoItem } from "..";

const App = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const [inputValue, setInputValue] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleAddClick = () => {
        if (!hasError) dispatch(addTodo(inputValue));
    };

    const handleInputChange = ({ target: { value } }) => {
        if (value.length === 0) setHasError(true);
        else {
            setHasError(false);
        }
        setInputValue(value);
    };

    return (
        <div className="todo">
            <div className="todo-form">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type a todo..."
                    className="todo-form input"
                />
                <button onClick={handleAddClick} className="todo-form__button">
                    Add Todo
                </button>
                <p className={`todo-form__error ${hasError ? "active" : ""}`}>
                    Length of todo must be less than 15 symbols
                </p>
            </div>
            <div className="todo-list">
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </div>
        </div>
    );
};

export default App;
