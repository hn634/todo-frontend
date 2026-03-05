import React, { useState } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (!task || !task.trim()) return;
    setTodos((prev) => [...prev, task.trim()]);
  };

  const appStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <div style={appStyle}>
      <Header />

      {/* サインアップフォーム */}
      <SignUpForm />

      {/* Todoフォーム */}
      <ToDoForm addTodo={addTodo} />

      {/* Todoリスト */}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
