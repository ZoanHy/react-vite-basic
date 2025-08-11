const TodoNew = () => {
  return (
    <div className="todo-new">
      <input type="text" placeholder="Add a new task" className="todo-input" />
      <button style={{ cursor: "pointer" }}>Add</button>
    </div>
  );
};

export default TodoNew;
