const TodoData = (props) => {
  const { todoList } = props;

  return <div className="todo-data">{JSON.stringify(todoList)}</div>;
};

export default TodoData;
