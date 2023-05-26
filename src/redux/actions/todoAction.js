export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_FILTER = "SET_FILTER";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  };
}

export function editTodo(todoId, editedTitle) {
  return {
    type: EDIT_TODO,
    payload: { id: todoId, editedTitle }
  };
}

// Import tipe aksi yang dibutuhkan


// Fungsi aksi untuk mengatur filter
export const setFilter = (filterType) => {
  return {
    type: SET_FILTER,
    payload: filterType,
  };
};
