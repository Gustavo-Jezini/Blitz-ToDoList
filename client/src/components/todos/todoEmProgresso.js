import React from 'react'
import { useSelector } from 'react-redux';

const TodoEmProgresso = () => {
  const todos = useSelector((state) => state.todos);

  const inProgressTodos = todos.filter((todo) => todo.progress === 'inProgress');
  return (
    <div>
      <ul>
      {inProgressTodos.map((toDos) => {
      return <li key={todos._id}>{toDos.needTodo}</li>
      })}
    </ul>
    </div>
  )
}

export default TodoEmProgresso;