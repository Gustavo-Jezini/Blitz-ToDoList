import React from 'react'
import { useSelector } from 'react-redux';

const TodoFinalizado = () => {
  const todos = useSelector((state) => state.todos);


  const finishedTodos = todos.filter((todo) => todo.progress === 'finished');
  return (
    <div>
      <ul>
      {finishedTodos.map((toDos) => {
      return <li key={todos._id}>{toDos.needTodo}</li>
      })}
    </ul>
    </div>
  )
}

export default TodoFinalizado