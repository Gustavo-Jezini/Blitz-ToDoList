import React from 'react';
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoPendente = () => {
  const todos = useSelector((state) => state.todos);

  const pendentTodos = todos.filter((todo) => todo.progress === 'begin');
  return (
    <div>
      <CardToDo todoList={pendentTodos} />
    </div>
  )
}

export default TodoPendente