import React, { useState } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (!task || !task.trim()) return;
    setTodos((prev) => [...prev, task.trim()]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Header />
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
