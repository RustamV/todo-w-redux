import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTodoEditing: false,
            inputValue: this.props.name,
            isMenuClicked: false,
            hasError: false,
        };
    }

    changeTodoState = () => {
        if (this.state.inputValue.length > 0 && this.state.inputValue.length < 16) {
            this.props.changeTodo(this.props.id, this.state.inputValue);
            this.setState({
                isTodoEditing: false
            });
        }
        else {
            this.setState({ hasError: true })
        }
    }

    handleInputChange = (e) => {
        if (e.target.value.length > 15 ||  e.target.value.length === 0) {
            this.setState({ hasError: true })
        }
        else {
            this.setState({ hasError: false })
        }
        this.setState({inputValue: e.target.value});
    }

    render() {
        if (!this.state.isTodoEditing) {
            return (
                <div className={`todo-item ${this.props.status === 'done' ? "todo-item--done" : this.props.status === 'in progress' ? "todo-item--inprocess" : this.props.status === 'failed' ? 'todo-item--failed' : ""}`}>
                    <div className={"todo-item__top"}>
                        <p>{this.props.name}</p>
                        <div className={"todo-item__dropdown"} onClick={() => this.setState({ isMenuClicked: !this.state.isMenuClicked })}>
                            <ul className={`todo-item__dropdown--hidden ${this.state.isMenuClicked ? 'active' : ''}`}>
                                <li className={"todo-item__edit"} onClick={() => this.setState({ isTodoEditing: true })}>edit</li>
                                <li className={"todo-item__delete"} onClick={() => this.props.deleteTodo(this.props.id)}>delete</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"todo-item__bottom"}>
                        <p className={"todo-item__date"}>{this.props.date}</p>
                        <div className={"todo-item__progress"}>
                            <button
                                title={"done"}
                                className={"todo-item__button todo-item__button--done"}
                                onClick={() => this.props.changeStatus(this.props.id, 0)}
                            ></button>
                            <button
                                title={"in progress"}
                                className={"todo-item__button todo-item__button--inprocess"}
                                onClick={() => this.props.changeStatus(this.props.id, 1)}
                            ></button>
                            <button
                                title={"failed"}
                                className={"todo-item__button todo-item__button--failed"}
                                onClick={() => this.props.changeStatus(this.props.id, 2)}
                            ></button>
                        </div>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className={"todo-item"}>
                    <form className={"todo-item__changeform"}>
                        <input
                            value={this.state.inputValue}
                            onChange={(e => this.handleInputChange(e))}
                            placeholder="Type a todo..."
                            className={""}
                        />
                        <div className={"todo-item__changebuttons"}>
                            <button onClick={() => this.changeTodoState()} disabled={this.state.hasError}>Save</button>
                            <button onClick={() => this.setState({ isTodoEditing: false })}>Cancel</button>
                        </div>
                        <p className={`todo-item--error ${this.state.hasError ? 'active' : ''}`}>Length of todo must be less than 15 symbols</p>
                    </form>
                </div>

            );
        }
    }
}