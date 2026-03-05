import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // http://localhost:8000/api/todoにアクセスし、todoのリストを取得
    fetch("http://localhost:8000/api/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log("取得したデータ:", data); // ← 追加
        setTodos(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
