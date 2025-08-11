import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";

import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn HTML" },
    { id: 2, name: "Learn CSS" },
    { id: 3, name: "Learn JavaScript" },
  ]);

  const addNewTodo = () => {
    alert("New Todo Added");
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>

      <TodoNew addNewTodo={addNewTodo} />

      <TodoData todoList={todoList} />

      <div className="todo-image">
        <img src={reactLogo} alt="" className="logo" />
      </div>
    </div>
  );
}

export default App;
