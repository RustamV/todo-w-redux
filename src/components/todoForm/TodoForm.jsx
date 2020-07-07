import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          hasError: false
        };
    }

    handleAddClick = () => {
        if(!this.state.hasError) 
            this.props.addTodo(this.state.inputValue);
    }

    handleInputChange = (e) => {
        if(e.target.value.length === 0)   
            this.setState({
                hasError: true
            });
        else {
            this.setState({
                hasError: false
            }); 
        }
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div className="todo-form">
                <input
                    value={this.state.inputValue}
                    onChange={e => this.handleInputChange(e)}
                    placeholder="Type a todo..."
                    className="todo-form input"
                />
                <button onClick={this.handleAddClick} className="todo-form__button">Add Todo</button>
                <p className={`todo-form__error ${this.state.hasError ? 'active' : ''}`}>Length of todo must be less than 15 symbols</p>
            </div>
        )
    }
}