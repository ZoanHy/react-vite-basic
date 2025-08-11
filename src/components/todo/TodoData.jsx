const TodoData = (props) => {
  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
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
