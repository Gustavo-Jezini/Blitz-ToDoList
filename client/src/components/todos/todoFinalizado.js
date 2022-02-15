import React from 'react';
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoFinalizado = ({ setCurrentId }) => {
  const todos = useSelector((state) => state.todos);


  const finishedTodos = todos.filter((todo) => todo.progress === 'finished');
  return (
    <div>
      <CardToDo setCurrentId={setCurrentId} todoList={finishedTodos} />
    </div>
  )
}

export default TodoFinalizado