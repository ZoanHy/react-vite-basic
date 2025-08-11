import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";

import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";

function App() {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>

      <TodoNew />

      <TodoData />

      <div className="todo-image">
        <img src={reactLogo} alt="" className="logo" />
      </div>
    </div>
  );
}

export default App;
