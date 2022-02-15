import React from 'react';
import { useSelector } from 'react-redux';
import CardToDo from './CardToDo';

const TodoPendente = ({ setCurrentId }) => {
  const todos = useSelector((state) => state.todos);

  const pendentTodos = todos.filter((todo) => todo.progress === 'begin');
  return (
    <div>
      <CardToDo setCurrentId={setCurrentId} todoList={pendentTodos} />
    </div>
  )
}

export default TodoPendente