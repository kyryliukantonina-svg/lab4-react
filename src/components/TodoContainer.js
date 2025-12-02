import React, { useState } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "Learn React", completed: false },
    { id: uuidv4(), title: "Do homework", completed: true },
    { id: uuidv4(), title: "Buy groceries", completed: false },
  ]);

  const handleChange = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const delTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};

export default TodoContainer;
