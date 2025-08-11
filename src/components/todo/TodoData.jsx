const TodoData = (props) => {
  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          // need key to not render not using index
          <div key={item.id} className="todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
