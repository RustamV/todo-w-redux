import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './store/reducers'

import './index.css';
import './style/main.scss'
import TodoApp from './components/todoApp/TodoApp';

const store = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

