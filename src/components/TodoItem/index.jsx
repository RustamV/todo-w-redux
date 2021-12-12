import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { EditForm } from "..";
import { deleteTodo, editStatus } from "../../store/todo";
import classNames from "classnames";
import styles from "./index.module.scss";

const todoStatuses = ["done", "in progress", "failed"];

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { name, date, id, status } = todo;
    const [isTodoEditing, setIsTodoEditing] = useState(false);

    const todoClassnames = useMemo(
        () =>
            classNames(styles.todoItem, {
                [styles.done]: status === todoStatuses[0],
                [styles.inProgress]: status === todoStatuses[1],
                [styles.failed]: status === todoStatuses[2]
            }),
        [status]
    );

    const statusButtons = useMemo(() => {
        const statusObjects = [
            { id: 0, title: "Done", className: styles.done },
            { id: 1, title: "In progress", className: styles.inProgress },
            { id: 2, title: "Failed", className: styles.failed }
        ];

        const switchStatus = (statusId) => {
            dispatch(editStatus({ id, status: statusId }));
        };

        return statusObjects.map((button) => {
            return {
                ...button,
                className: classNames(styles.button, button.className, {
                    [styles.active]: status === todoStatuses[button.id]
                }),
                onClick: () => switchStatus(button.id)
            };
        });
    }, [dispatch, id, status]);

    const openEditForm = () => {
        setIsTodoEditing(true);
    };

    const closeEditForm = () => {
        setIsTodoEditing(false);
    };

    const handleDeleteButton = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className={todoClassnames}>
            {isTodoEditing ? (
                <EditForm id={id} name={name} closeEditForm={closeEditForm} />
            ) : (
                <>
                    <div className={styles.top}>
                        <p>{name}</p>
                        <div className={styles.settings}>
                            <button
                                className={classNames(styles.button, styles.edit, styles.active)}
                                onClick={openEditForm}></button>
                            <button
                                className={classNames(styles.button, styles.delete, styles.active)}
                                onClick={handleDeleteButton}></button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.date}>{date}</p>
                        <div className={styles.progress}>
                            {statusButtons.map((button) => (
                                <button
                                    title={button.title}
                                    onClick={button.onClick}
                                    className={button.className}
                                    key={button.id}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TodoItem;
