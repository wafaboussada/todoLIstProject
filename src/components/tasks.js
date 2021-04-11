import React from "react";
import { connect } from 'react-redux';
import Menu from './menu';
import "./todoList.css";
import { setTodosList, setTodo, setTodoEdit, setTodoEditText } from '../Store';
const Tasks = (props) => {
  const { dispatch, todos, todo, todoEditing} = props;
  React.useEffect(() => {
    let loadedTodos;
    const json = localStorage.getItem("todos");
    if (json !== undefined) {
      loadedTodos = JSON.parse(json);
    }
    if (loadedTodos) {
      dispatch(setTodosList(loadedTodos))
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(props.todos);
    localStorage.setItem("todos", json);
  }, [props.todos]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: props.todo,
      completed: false,
    };
    const nTodos = [...props.todos].concat(newTodo)
    dispatch(setTodosList(nTodos));
    dispatch(setTodo(""));
  }

  function deleteTodo(id) {
    let updatedTodos = [...props.todos].filter((todo) => todo.id !== id);
    dispatch(setTodosList(updatedTodos));
  }

  function toggleComplete(id) {
    let updatedTodos = [...props.todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    dispatch(setTodosList(updatedTodos));
  }

  function submitEdits(id) {
    const updatedTodos = [...props.todos].map((todo) => {
      if (todo.id === id) {
        todo.text = props.editingText;
      }
      return todo;
    });
    dispatch(setTodosList(updatedTodos));
    dispatch(setTodoEdit(null));
  }

  return (
    <div>
      <Menu />
      <div id="todo-list">
        <h1>Liste des taches</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => dispatch(setTodo(e.target.value))}
            value={todo}
          />
          <button type="submit">Ajouter la tâche</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
              <div className="todo-text">
                <input
                  type="checkbox"
                  id="completed"
                  checked={todo.completed}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Cocher pour completer la tâche"
                  onChange={() => toggleComplete(todo.id)}
                />
                {todo.id === todoEditing ? (
                  <input
                    type="text"
                    onChange={(e) => dispatch(setTodoEditText(e.target.value))}
                  />
                ) : (
                    <div>{todo.text}</div>
                  )}
              </div>
              <div style={{ marginRight: '0' }}>{todo.completed ? <span className="badge badge-success">Complétée</span>
                : <span className="badge badge-danger">Non complétée</span>}</div>
            </div>
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
              ) : (
                  <button onClick={() => dispatch(setTodoEdit(todo.id))}>Edit</button>
                )}

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    todo: state.todo.todo,
    todoEditing: state.todoEdit.todoEditing,
    editingText: state.todoEditText.todoEditingText
  }
}
const TasksContainer = connect(mapStateToProps)(Tasks)
export default TasksContainer;