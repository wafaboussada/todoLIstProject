import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { TodosReducer, todoReducer, setTodoEditingReducer, setTodoEditingTextReducer } from './Store';

const rootReducers = combineReducers({
    todos: TodosReducer,
    todo: todoReducer,
    todoEdit: setTodoEditingReducer,
    todoEditText: setTodoEditingTextReducer,
});

const Store = createStore(rootReducers)

ReactDOM.render(
    <Provider store={Store} >
        <App />
    </Provider>
    , document.getElementById('root'));
