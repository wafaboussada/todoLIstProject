export const setTodosList = (todo) => ({
    type: "SET_TODOS",
    payload: todo
})
export const setTodo = (item) => ({
    type: "ADD_ITEM",
    payload: item
})
export const setTodoEdit = (editId) => ({
    type: "SET_TODO_EDITING",
    payload: editId
})
export const setTodoEditText = (editText) => ({
    type: "SET_TODO_EDITING_TEXT",
    payload: editText
})
const initialState = {
    todos: [],
    todo: "",
    todoEditing: null,
    todoEditingText: ""
}
export const TodosReducer = (state = initialState, action) => {
    if (action.type === "SET_TODOS") {
        return {
            todos: action.payload
        }
    }
    if (action.type === "RESET") {
        return {
            count: 0
        }
    }
    return state
}
export const todoReducer = (state = initialState, action) => {
    if (action.type === "ADD_ITEM") {
        return {
            todo: action.payload
        }
    }
    return state
}
export const setTodoEditingReducer = (state = initialState, action) => {
    if (action.type === "SET_TODO_EDITING") {
        return {
            todoEditing: action.payload
        }
    }
    return state
}
export const setTodoEditingTextReducer = (state = initialState, action) => {
    if (action.type === "SET_TODO_EDITING_TEXT") {
        return {
            todoEditingText: action.payload
        }
    }
    return state
}