import React from 'react'
import TodoEmProgresso from './todos/todoEmProgresso';
import TodoFinalizado from './todos/todoFinalizado';
import TodoPendente from './todos/todoPendente';

import { useSelector } from 'react-redux';

const TodosGeral = () => {
  // Tem acesso a todo state do redux
  const todos = useSelector((state) => state.todos)

  console.log(todos);

  return (
    !todos.length ? <h1>Loading</h1> : (
      <>
      {<TodoPendente />}
      <TodoEmProgresso />
      <TodoFinalizado />
      </>
    )
  )
}

export default TodosGeral;