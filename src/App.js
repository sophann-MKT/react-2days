import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleTodoSubmit = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter Your Todo..."
        value={todo}
        onChange={handleInputChange}
      />
      <TodoList todos={todos} />
      <button onClick={handleTodoSubmit}>Submit</button>
    </>
  );
}

export default App;
