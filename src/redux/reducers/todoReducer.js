import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, SET_FILTER } from "../actions/todoAction";

const initialState = {
  todos: [
    { id: 1, title: "Buy milk", isCompleted: false },
    { id: 2, title: "Buy egg", isCompleted: true },
    { id: 3, title: "Buy t-shirt", isCompleted: false }
  ],
  counter: 0
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.editedTitle } : todo
        )
        
      };
    
      case SET_FILTER: // Penanganan aksi SET_FILTER
      return {
        ...state,
        filter: action.payload,
      };
      default:
        return state;
  }
};

export default todoReducer;
