import { useState } from "react";

const TodoNew = (props) => {
  // useState
  //   const valueInput = "huy";
  const [valueInput, setValueInput] = useState("huy");

  const { addNewTodo } = props;

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput(""); // Clear input after adding
  };

  const handleOnChange = (name) => {
    console.log(name);

    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Add a new task"
        className="todo-input"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
