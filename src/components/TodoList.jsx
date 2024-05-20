import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, todoIsDone }) => {
  return (
    <div className="todoList">
      <h2 className="todoStateTitle">
        {todoIsDone === false ? 'Working...🔥' : 'Done ✅'}
      </h2>
      <div className='todoItem'>
        {todos
          .filter((todo) => todo.isDone === todoIsDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              setTodos={setTodos}
              todo={todo}
              todos={todos}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
