import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  editTodo,
  addTodo,
  setFilter
} from "../redux/actions/todoAction";

import "../styles.css";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const handleFilter = (filterType) => {
    dispatch(setFilter(filterType));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, title) => {
    const newTitle = prompt("Enter new title:", title);
    if (newTitle) {
      dispatch(editTodo(id, newTitle));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      const id = Date.now();
      dispatch(addTodo({ id, title: newTodo, isCompleted: false }));
      setNewTodo("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "active") {
      return !todo.isCompleted;
    } else if (activeFilter === "completed") {
      return todo.isCompleted;
    } else {
      return true;
    }
  });

  return (
    <div className="todo-container">
      <h1>What's the plan for today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What to do"
        />
        <button type="submit">Add Todo</button>
      </form>
      <div className="filter-buttons">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggle(todo.id)}
            />
            <div className="todo-label">{todo.title}</div>
            {!todo.isCompleted && (
              <div className="todo-actions">
                <button onClick={() => handleEdit(todo.id, todo.title)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
        {filteredTodos.length === 0 && <p>No todos.</p>}
      </div>
    </div>
  );
};

export default TodoList;
