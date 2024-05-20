import {useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(!title.trim() || !contents.trim()) {
      alert('제목과 내용을 모두 입력해주세요!');
      return;
    }  

    const nextTodo = {
      id: Date.now(),
      title,
      contents,
      isDone : false,
    }

    setTodos([...todos, nextTodo]);
    setTitle('');
    setContents('');
  }

  return (
    <form onSubmit={onSubmitHandler} className='todoForm'>
      <label htmlFor="inputTitle">제목</label>
      <input
        type="text"
        placeholder="오늘의 할 일을 적어주세요!"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='inputTitle'
      />
      <label htmlFor="inputContent">내용</label>
      <input
        type="text"
        placeholder="세부 내용을 적어주세요!"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        className='inputContent'
      />
      <button type="submit" className='addButton'>추가하기</button>
    </form>
  );
};

export default TodoForm;
