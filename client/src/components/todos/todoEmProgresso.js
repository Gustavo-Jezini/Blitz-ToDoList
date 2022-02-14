import React from 'react'
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoEmProgresso = ({ setCurrentId }) => {
  const todos = useSelector((state) => state.todos);

  const inProgressTodos = todos.filter((todo) => todo.progress === 'inProgress');
  return (
    <div>
      <CardToDo setCurrentId={setCurrentId} todoList={inProgressTodos} />
    </div>
  )
}

export default TodoEmProgresso;