import { useState } from 'react';
import Header from '../components/Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const initialState = [
    {
      id: 0,
      title: '리액트 공부하기',
      contents: '리액트 강의듣기',
      isDone: false,
    },
    {
      id: 1,
      title: '스탠다드 과제하기',
      contents: '도움없이 투두만들어 보기',
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} todoIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} todoIsDone={true} />
    </>
  );
};

export default TodoContainer;
