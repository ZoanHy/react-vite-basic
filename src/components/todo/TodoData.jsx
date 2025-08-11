const TodoData = (props) => {
  const { todoList, deleteATodo } = props;

  const handleDelete = (id) => {
    deleteATodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          // need key to not render not using index
          <div key={item.id} data-id={item.id} className="todo-item">
            <div>{item.name}</div>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
