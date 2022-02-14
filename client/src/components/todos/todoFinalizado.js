import React from 'react';
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoFinalizado = () => {
  const todos = useSelector((state) => state.todos);


  const finishedTodos = todos.filter((todo) => todo.progress === 'finished');
  return (
    <div>
      <CardToDo todoList={finishedTodos} />
    </div>
  )
}

export default TodoFinalizado