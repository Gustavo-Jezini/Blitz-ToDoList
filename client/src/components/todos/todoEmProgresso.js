import React from 'react'
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoEmProgresso = () => {
  const todos = useSelector((state) => state.todos);

  const inProgressTodos = todos.filter((todo) => todo.progress === 'inProgress');
  return (
    <div>
      <CardToDo todoList={inProgressTodos} />
    </div>
  )
}

export default TodoEmProgresso;