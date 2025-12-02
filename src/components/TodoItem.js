import React from "react";
import './TodoItem/TodoItem.css'

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  // const completedStyle = {
  //   fontStyle: "italic",
  //   color: "#d35e0f",
  //   opacity: 0.6,
  //   textDecoration: "line-through",
  // };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      <span className="span-item"></span>
    </li>
  );
};

export default TodoItem;
