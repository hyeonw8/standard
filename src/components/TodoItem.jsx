const TodoItem = ({todo, todos, setTodos}) => {
  const { id, title, contents, isDone } = todo;

  const deleteTodo = (id) => {
    return setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id) => {
    return setTodos(todos.map(todo =>  todo.id === id ? {...todo, isDone: !isDone} : todo))
  }

  return (
    <div className='todoBox'>
      <div className='textBox'>
        <h3 className="todoTitle">{title}</h3>
        <p className="todoContent">{contents}</p>
      </div>
      <div className='buttonBox'>
        <button className="todoButton" onClick={() => deleteTodo(id)}>삭제</button>
        <button className="todoButton" onClick={() => toggleTodo(id)}>{isDone === false ? '완료' : '취소'}</button>
      </div>
    </div>
  )
}

export default TodoItem