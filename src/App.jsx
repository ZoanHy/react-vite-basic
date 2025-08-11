import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";

import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteATodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>

      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteATodo={deleteATodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      )}
    </div>
  );
}

export default App;
