import { useState } from "react";

const TodoNew = (props) => {
  // useState
  //   const valueInput = "huy";
  const [valueInput, setValueInput] = useState("huy");

  const { addNewTodo } = props;

  const handleClick = () => {
    console.log(">>> check valueInput:", valueInput);
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
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
