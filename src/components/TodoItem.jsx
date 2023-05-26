import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../redux/actions/todoAction";
import "../styles.css";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo(todo.id, editedTitle));
    }
    setIsEditing(!isEditing);
  };

  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleEditChange}
        />
      ) : (
        <>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            name={`todo-${todo.id}`}
            checked={todo.isCompleted}
            onChange={() => handleToggle(todo.id)}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className="todo-label"
          >
            {todo.title}
          </label>
        </>
      )}
      <div className="todo-actions">
        <button onClick={handleEdit} className="todo-edit-btn">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => handleDelete(todo.id)} className="todo-delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
